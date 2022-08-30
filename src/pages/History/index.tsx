import { useEffect, useState } from 'react';

import axios from 'axios';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import CategoryButton from '@components/CategoryButton';
import { Item } from '@components/CategoryButton/CategoryButton.style';
import HistoryHeader from '@components/HistoryHeader';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import Tabs from '@components/Tabs';
import { API } from '@constants/api';
import { historyListCategoryItem } from '@constants/category';
import { historyListItem } from '@constants/historyContent';
import { listExample } from '@data/shareList';
import * as S from '@pages/History/History.style';
import { activeShareList } from '@store/filterShareList';
import { thumbnailUrlListType } from '@type/shareList';
import { getRecencySort } from '@utils/ShareListSort';
import { getHistoryMention } from '@utils/getMention';

const History = ({ historyType }: { historyType: string }) => {
  const [salesData, setSalesData] = useState<thumbnailUrlListType[]>(listExample);
  const [curShareFilterList, setCurrentFilterShareList] = useState(false);
  const [activeShareListValue, setActiveShareListValue] = useRecoilState(activeShareList);
  const currentType = historyListItem.filter((item) => item.type === historyType)[0];
  const currentCategoryContent = historyListCategoryItem.filter(
    (item) => item.type === historyType,
  );

  // useEffect(() => {
  //   const curType = activeShareListValue.delivery
  //     ? 'delivery'
  //     : activeShareListValue.ingredient
  //     ? 'ingredient'
  //     : '';
  //   (async () => {
  //     const { data } = await axios.get(`${API.MY_SHARE}`, {
  //       params: {
  //         mineType: currentType.mineType,
  //         shareType: curType,
  //         isExpired: curShareFilterList,
  //       },
  //     });
  //     setSalesData(data);
  //   })();
  // }, [activeShareListValue]);
  // console.log(salesData);

  return (
    <S.Wrapper>
      <HistoryHeader title={currentType.title} />
      <Tabs
        activeShareListValue={activeShareListValue}
        setActiveShareListValue={setActiveShareListValue}
      />
      <CategoryButton
        categoryItem={currentCategoryContent}
        setCurrentFilterList={setCurrentFilterShareList}
      />
      {!salesData?.length ? (
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
