import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { getProfileMyMenuData } from '@api/myMenu';
import CategoryButton from '@components/CategoryButton';
import PreviewShareListBigSizeImage from '@components/PreviewShareListBigSizeImage';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import Tabs from '@components/Tabs';
import BackTitleHeader from '@components/common/BackTitleHeader';
import { historyListCategoryItem } from '@constants/category';
import { historyListItem } from '@data/myMenu';
import useShareListTabsInfo from '@hooks/useShareListTabsInfo';
import * as S from '@pages/History/History.style';
import { activeShareList } from '@store/filterShareList';
import { activeShareListType } from '@store/filterShareList';
import { thumbnailUrlListType } from '@type/shareList';
import { getRecencySort } from '@utils/ShareListSort';
import { getHistoryMention } from '@utils/getMention';

const ShareListContentComponentInfo = {
  delivery: PreviewShareListBigSizeImage,
  ingredient: PreviewShareListLeftImage,
};

const History = ({ menuType }: { menuType: string }) => {
  const [salesData, setSalesData] = useState<thumbnailUrlListType[]>();
  const shareListTabsInfo = useShareListTabsInfo();

  const [curShareFilterList, setCurrentFilterShareList] = useState(false);
  const curShareType = useRecoilValue(activeShareList);
  const currentType = historyListItem.filter((item) => item.type === menuType)[0];
  const currentCategoryContent = historyListCategoryItem.filter((item) => item.type === menuType);

  const ListContentComponent = ShareListContentComponentInfo[curShareType];

  useEffect(() => {
    (async () => {
      const response = await getProfileMyMenuData(
        currentType.mineType,
        curShareType,
        curShareFilterList,
      );
      setSalesData(response);
    })();
  }, [currentType, curShareType, curShareFilterList]);

  return (
    <S.Wrapper>
      <BackTitleHeader title={currentType.title} />
      <Tabs<activeShareListType> tabsInfo={shareListTabsInfo} targetAtom={activeShareList} />
      <CategoryButton
        categoryItem={currentCategoryContent}
        setCurrentFilterList={setCurrentFilterShareList}
      />
      {!!salesData?.length ? (
        <S.ListContent>
          <ListContentComponent data={getRecencySort(salesData)} isDone={curShareFilterList} />
        </S.ListContent>
      ) : (
        <S.FailedContent>
          <S.FailedText>{getHistoryMention(menuType, curShareFilterList)}</S.FailedText>
        </S.FailedContent>
      )}
    </S.Wrapper>
  );
};

export default History;
