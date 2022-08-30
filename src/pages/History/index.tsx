import { useEffect, useState } from 'react';

import axios from 'axios';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import CategoryButton from '@components/CategoryButton';
import HistoryHeader from '@components/HistoryHeader';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import Tabs from '@components/Tabs';
import { API } from '@constants/api';
import { historyListCategoryItem } from '@constants/category';
import { purchaseListItem, salesListItem } from '@constants/historyContent';
import { listExample } from '@data/shareList';
import { activeShareList, currentFilterHistoryList } from '@store/filterShareList';
import { defaultPageStyle } from '@styles/mixin';
import { thumbnailUrlListType } from '@type/shareList';
import { getRecencySort } from '@utils/ShareListSort';

const History = ({ historyType }: { historyType: string }) => {
  const [activeShareListValue, setActiveShareListValue] = useRecoilState(activeShareList);
  const [salesData, setSalesData] = useState<thumbnailUrlListType[]>(listExample);
  const [curShareFilterList, setCurrentFilterShareList] = useRecoilState(currentFilterHistoryList);
  const currentType = historyType === 'sales' ? salesListItem : purchaseListItem;

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
    <Wrapper>
      <HistoryHeader title={currentType.title} />
      <Tabs
        activeShareListValue={activeShareListValue}
        setActiveShareListValue={setActiveShareListValue}
      />
      <CategoryButton
        categoryItem={historyListCategoryItem}
        setCurrentFilterList={setCurrentFilterShareList}
      />
      {salesData?.length ? (
        <ListContent>
          <PreviewShareListLeftImage data={getRecencySort(salesData)} isDone={curShareFilterList} />
        </ListContent>
      ) : (
        <div>데이터 없음</div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${defaultPageStyle}
`;

const ListContent = styled.div``;

export default History;
