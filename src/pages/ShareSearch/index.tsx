import { useEffect, useState } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import { getShareListData } from '@api/shareList';
import CategoryButton from '@components/CategoryButton';
import FailedContents from '@components/FailedContents';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import ShareSearchHeader from '@components/ShareSearchHeader';
import { shareListCategoryItem } from '@constants/category';
import * as S from '@pages/ShareSearch/ShareSearch.style';
import { currentFilterShareList } from '@store/filterShareList';
import { currentMapKey, searchRecent } from '@store/localStorage';
import { currentLatitudeLongitude } from '@store/location';
import { ShareListType } from '@type/shareList';
import { getSortData } from '@utils/ShareListSort';

const ShareSearch = () => {
  const curMapKey = useRecoilValue(currentMapKey);
  const [curShareFilterList, setCurrentFilterShareList] = useRecoilState(currentFilterShareList);
  const searchRecentMapList = useRecoilValue(searchRecent);
  const searchRecentValue = searchRecentMapList.get(curMapKey)?.name;
  const { lat, lng } = useRecoilValue(currentLatitudeLongitude);
  const [searchData, setSearchData] = useState<ShareListType[]>();

  const getShareList = async () => {
    const location = { lat, lng };
    const shareListData = await getShareListData({ location, keyword: searchRecentValue });
    setSearchData(shareListData);
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
