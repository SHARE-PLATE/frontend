import { useEffect, useRef, useState } from 'react';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

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
import useModal from '@hooks/useModal';
import * as S from '@pages/ShareSearch/ShareSearch.style';
import { currentFilterShareList } from '@store/filterShareList';
import { keywordListTrigger, registeredKeywordLength } from '@store/keyword';
import { currentMapKey, searchRecent } from '@store/localStorage';
import { currentLatitudeLongitude, currentAddressName } from '@store/location';
import { ShareListType } from '@type/shareList';
import { getSortData } from '@utils/ShareListSort';

const ShareSearch = () => {
  const [curShareFilterList, setCurrentFilterShareList] = useRecoilState(currentFilterShareList);
  const curMapKey = useRecoilValue(currentMapKey);
  const keywordLength = useRecoilValue(registeredKeywordLength);
  const searchRecentMapList = useRecoilValue(searchRecent);
  const { lat, lng } = useRecoilValue(currentLatitudeLongitude);
  const setKeywordListTrigger = useSetRecoilState(keywordListTrigger);
  const curAddressNameArr = useRecoilValue(currentAddressName).split(' ');

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
    if (keywordLength >= 10) {
      setIsKeywordLengthModalOpen(true);
      return false;
    }

    let regionName;
    if (curAddressNameArr.length <= 4) regionName = curAddressNameArr[2];
    else regionName = curAddressNameArr[3];

    const newKeyword = {
      location: regionName,
      latitude: String(lat),
      longitude: String(lng),
      contents: searchRecentValue || '',
    };

    const isSuccessFetch = await addKeywords(newKeyword);

    if (isSuccessFetch) {
      setKeywordListTrigger((prev) => prev + 1);
    }
  };

  useEffect(() => {
    getShareList();
  }, [searchRecentValue]);

  return (
    <S.Wrapper>
      <S.ListHeader>
        <ShareSearchHeader keyWord={searchRecentValue || ''} />
        <CategoryButton
          categoryItem={shareListCategoryItem}
          setCurrentFilterList={setCurrentFilterShareList}
        />
      </S.ListHeader>
      <S.AddKeywordButton onClick={handleSubmitClick}>
        <Icon iconName='NoticeFill' />
        <S.KeywordContent>{searchRecentValue}</S.KeywordContent>
        <S.Text> 알림 받기</S.Text>
      </S.AddKeywordButton>
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
