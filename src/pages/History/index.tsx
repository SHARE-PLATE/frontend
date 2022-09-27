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
import { historyTrigger } from '@store/meyMenu';
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
  const historyListTrigger = useRecoilValue(historyTrigger);

  const [isDone, setIsDone] = useState<boolean>(false);
  const currentShareType = useRecoilValue(activeShareList);
  const currentMyMenuType = historyListItem.filter((item) => item.type === menuType)[0];
  const currentCategoryContent = historyListCategoryItem.filter((item) => item.type === menuType);

  const ListContentComponent = ShareListContentComponentInfo[currentShareType];

  useEffect(() => {
    (async () => {
      const response = await getProfileMyMenuData(
        currentMyMenuType.mineType,
        currentShareType,
        isDone,
      );
      setSalesData(response);
    })();
    return () => setSalesData([]);
  }, [currentMyMenuType, currentShareType, isDone, historyListTrigger]);

  return (
    <S.Wrapper>
      <BackTitleHeader title={currentMyMenuType.title} />
      <Tabs<activeShareListType> tabsInfo={shareListTabsInfo} targetAtom={activeShareList} />
      <CategoryButton categoryItem={currentCategoryContent} setCurrentFilterList={setIsDone} />
      {!!salesData?.length ? (
        <S.ListContent>
          <ListContentComponent
            data={getRecencySort(salesData)}
            currentMyMenuType={currentMyMenuType.type}
            isDone={isDone}
            isHistory={true}
          />
        </S.ListContent>
      ) : (
        <S.FailedContent>
          <S.FailedText>{getHistoryMention(menuType, isDone)}</S.FailedText>
        </S.FailedContent>
      )}
    </S.Wrapper>
  );
};

export default History;
