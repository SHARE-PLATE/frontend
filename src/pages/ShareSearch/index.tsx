import { useEffect, useRef, useState } from 'react';

import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import { addKeywords } from '@api/keyword';
import { getShareListData } from '@api/shareList';
import CategoryButton from '@components/CategoryButton';
import FailedContents from '@components/FailedContents';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import ShareSearchHeader from '@components/ShareSearchHeader';
import FailedModal from '@components/common/FailedModal';
import Icon from '@components/common/Icon';
import { shareListCategoryItem } from '@constants/category';
import { keywordLengthFailed } from '@constants/mentions';
import useIsTopState from '@hooks/useIsTopState';
import useModal from '@hooks/useModal';
import * as S from '@pages/ShareSearch/ShareSearch.style';
import { currentFilterShareList } from '@store/filterShareList';
import {
  getRegisteredKeywordData,
  keywordListTrigger,
  registeredKeywordLength,
} from '@store/keyword';
import { currentMapKey, searchRecent } from '@store/localStorage';
import { currentLatitudeLongitude, currentAddressName } from '@store/location';
import { isLoginState } from '@store/user';
import { ShareListType } from '@type/shareList';
import { getSortData } from '@utils/ShareListSort';
import { findRegionName } from '@utils/getLocation';

const ShareSearch = () => {
  const isTop = useIsTopState();
  const [curShareFilterList, setCurrentFilterShareList] = useRecoilState(currentFilterShareList);
  const curMapKey = useRecoilValue(currentMapKey);
  const [keywordLength, setKeywordLength] = useRecoilState(registeredKeywordLength);
  const searchRecentMapList = useRecoilValue(searchRecent);
  const { lat, lng } = useRecoilValue(currentLatitudeLongitude);

  const setKeywordListTrigger = useSetRecoilState(keywordListTrigger);
  const curAddressNameArr = useRecoilValue(currentAddressName).split(' ');
  const regionName = findRegionName(curAddressNameArr);

  const {
    state,
    contents: { keywords },
  } = useRecoilValueLoadable(getRegisteredKeywordData(regionName));

  const loginState = useRecoilValueLoadable(isLoginState);
  const isLogin = loginState.state === 'hasValue' && loginState.contents;

  const [isSuccessKeyword, setIsSuccessKeyword] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const [isKeywordLengthModalOpen, setIsKeywordLengthModalOpen] = useModal({ modalRef });

  const searchRecentValue = searchRecentMapList.get(curMapKey)?.name;
  const [searchData, setSearchData] = useState<ShareListType[]>();

  const getShareList = async () => {
    const location = { lat, lng };
    const shareListData = await getShareListData({ location, keyword: searchRecentValue });
    setSearchData(shareListData);
  };

  const handleSubmitClick = async () => {
    if (!regionName) return false;

    if (keywordLength[regionName] >= 10) {
      setIsKeywordLengthModalOpen(true);
      return false;
    }

    const newKeyword = {
      location: regionName,
      latitude: String(lat),
      longitude: String(lng),
      contents: searchRecentValue || '',
    };

    const isSuccessFetch = await addKeywords(newKeyword);

    if (isSuccessFetch) {
      // 하단 알림 필요
      setIsSuccessKeyword(true);
      setKeywordListTrigger((prev) => prev + 1);
      setKeywordLength((prev) => ({ ...prev, [regionName]: keywordLength[regionName] + 1 }));
    }
  };

  useEffect(() => {
    getShareList();
    setIsSuccessKeyword(false);
  }, [searchRecentValue]);

  useEffect(() => {
    if (!isLogin) setIsSuccessKeyword(true);
  }, [isLogin]);

  useEffect(() => {
    if (state !== 'hasValue') return;
    if (keywords) setKeywordLength((prev) => ({ ...prev, [regionName]: keywords.length }));
  }, [state]);

  useEffect(() => {
    if (state !== 'hasValue') return;
    keywords.map((data: { id: number; contents: string }) => {
      if (data.contents === searchRecentValue) {
        setIsSuccessKeyword(true);
      }
    });
  }, [keywords, searchRecentValue]);

  return (
    <S.Wrapper>
      <S.ListHeader isTop={isTop}>
        <ShareSearchHeader keyWord={searchRecentValue || ''} />
        <CategoryButton
          categoryItem={shareListCategoryItem}
          setCurrentFilterList={setCurrentFilterShareList}
        />
      </S.ListHeader>

      {!isSuccessKeyword && (
        <S.AddKeywordButton onClick={handleSubmitClick}>
          <Icon iconName='NoticeFill' />
          <S.KeywordContent>{searchRecentValue}</S.KeywordContent>
          <S.Text> 알림 받기</S.Text>
        </S.AddKeywordButton>
      )}

      {isKeywordLengthModalOpen && (
        <FailedModal
          modalRef={modalRef}
          closeModal={() => setIsKeywordLengthModalOpen(false)}
          text={keywordLengthFailed}
        />
      )}

      {searchData?.length ? (
        <S.ListContent>
          <PreviewShareListLeftImage data={getSortData(curShareFilterList, searchData)} />
        </S.ListContent>
      ) : (
        <FailedContents />
      )}
    </S.Wrapper>
  );
};

export default ShareSearch;
