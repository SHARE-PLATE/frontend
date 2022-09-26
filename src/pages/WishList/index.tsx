import { useState, useEffect } from 'react';

import { useRecoilValue } from 'recoil';

import { getProfileMyMenuData } from '@api/myMenu';
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
import { thumbnailUrlListType } from '@type/shareList';
import { getRecencySort } from '@utils/ShareListSort';
import { getHistoryMention } from '@utils/getMention';

const ShareListContentComponentInfo = {
  delivery: PreviewShareListBigSizeImage,
  ingredient: PreviewShareListLeftImage,
};

const WishList = () => {
  const [wishListData, setWishListData] = useState<thumbnailUrlListType[]>();

  const [curShareFilterList, setCurrentFilterShareList] = useState(false);
  const shareListTabsInfo = useShareListTabsInfo();
  const curShareType = useRecoilValue(activeShareList);
  const currentCategoryContent = historyListCategoryItem.filter((item) => item.type === 'wishList');

  const ListContentComponent = ShareListContentComponentInfo[curShareType];

  useEffect(() => {
    (async () => {
      const response = await getProfileMyMenuData(
        wishListItem.mineType,
        curShareType,
        curShareFilterList,
      );
      setWishListData(response);
    })();
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
