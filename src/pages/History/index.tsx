import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { getHistoryData } from '@api/history';
import CategoryButton from '@components/CategoryButton';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import Tabs from '@components/Tabs';
import BackTitleHeader from '@components/common/BackTitleHeader';
import { historyListCategoryItem } from '@constants/category';
import { historyListItem } from '@constants/historyContent';
import useShareListTabsInfo from '@hooks/useShareListTabsInfo';
import * as S from '@pages/History/History.style';
import { activeShareList } from '@store/filterShareList';
import { activeShareListType } from '@store/filterShareList';
import { thumbnailUrlListType } from '@type/shareList';
import { getRecencySort } from '@utils/ShareListSort';
import { getHistoryMention } from '@utils/getMention';

const History = ({ historyType }: { historyType: string }) => {
  const [salesData, setSalesData] = useState<thumbnailUrlListType[]>();

  const shareListTabsInfo = useShareListTabsInfo();

  const [curShareFilterList, setCurrentFilterShareList] = useState(false);
  const curShareType = useRecoilValue(activeShareList);
  const currentType = historyListItem.filter((item) => item.type === historyType)[0];

  const currentCategoryContent = historyListCategoryItem.filter(
    (item) => item.type === historyType,
  );

  useEffect(() => {
    (async () => {
      console.log(currentType.mineType, curShareType, curShareFilterList);
      const response = await getHistoryData(currentType, curShareType, curShareFilterList);
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
          <PreviewShareListLeftImage data={getRecencySort(salesData)} isDone={curShareFilterList} />
        </S.ListContent>
      ) : (
        <S.FailedContent>
          <S.FailedText>{getHistoryMention(historyType, curShareFilterList)}</S.FailedText>
        </S.FailedContent>
      )}
    </S.Wrapper>
  );
};

export default History;
