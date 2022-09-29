import { useState, useLayoutEffect } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import { deleteWishListContent, getProfileMyMenuData } from '@api/myMenu';
import CategoryButton from '@components/CategoryButton';
import PreviewShareListBigSizeImage from '@components/PreviewShareListBigSizeImage';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import Tabs from '@components/Tabs';
import BackTitleHeader from '@components/common/BackTitleHeader';
import { historyListCategoryItem } from '@constants/category';
import { wishListItem } from '@data/myMenu';
import useShareListTabsInfo from '@hooks/useShareListTabsInfo';
import * as S from '@pages/WishList/WishList.style';
import { activeShareList } from '@store/filterShareList';
import { activeShareListType } from '@store/filterShareList';
import { clickedHeartId } from '@store/meyMenu';
import { ShareListType } from '@type/shareList';
import { getRecencySort } from '@utils/ShareListSort';
import { getHistoryMention } from '@utils/getMention';

const ShareListContentComponentInfo = {
  delivery: PreviewShareListBigSizeImage,
  ingredient: PreviewShareListLeftImage,
};

const WishList = () => {
  const [wishListData, setWishListData] = useState<ShareListType[]>();

  const [curShareFilterList, setCurrentFilterShareList] = useState(false);
  const shareListTabsInfo = useShareListTabsInfo();
  const curShareType = useRecoilValue(activeShareList);
  const currentCategoryContent = historyListCategoryItem.filter((item) => item.type === 'wishList');

  const [heartIdArr, setHeartIdArr] = useRecoilState<number[]>(clickedHeartId);

  const ListContentComponent = ShareListContentComponentInfo[curShareType];

  useLayoutEffect(() => {
    (async () => {
      if (!!heartIdArr.length) {
        heartIdArr.map(async (id: number) => await deleteWishListContent(id));
      }
      const response = await getProfileMyMenuData(
        wishListItem.mineType,
        curShareType,
        curShareFilterList,
      );
      setHeartIdArr([]);
      setWishListData(response);
    })();
    return () => setWishListData([]);
  }, [curShareType, curShareFilterList]);

  return (
    <S.Wrapper>
      <BackTitleHeader title={wishListItem.title} />
      <Tabs<activeShareListType> tabsInfo={shareListTabsInfo} targetAtom={activeShareList} />
      <CategoryButton
        categoryItem={currentCategoryContent}
        setCurrentFilterList={setCurrentFilterShareList}
      />
      {!!wishListData?.length ? (
        <S.ListContent>
          <ListContentComponent
            data={getRecencySort(wishListData)}
            isWish={true}
            isDone={curShareFilterList}
          />
        </S.ListContent>
      ) : (
        <S.FailedContent>
          <S.FailedText>{getHistoryMention('wishList', false)}</S.FailedText>
        </S.FailedContent>
      )}
    </S.Wrapper>
  );
};

export default WishList;
