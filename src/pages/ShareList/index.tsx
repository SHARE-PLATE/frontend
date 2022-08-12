import { useRecoilState, useRecoilValue } from 'recoil';

import CategoryButton from '@components/CategoryButton';
import MainHeader from '@components/MainHeader';
import PreviewShareListBigSizeImage from '@components/PreviewShareListBigSizeImage';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import Tabs from '@components/Tabs';
import { listExample, listExampleType } from '@data/shareList';
import * as S from '@pages/ShareList/ShareList.style';
import { currentFilterShareList, currentShareList } from '@store/filterShareList';
import {
  getDeadlineSort,
  getDistanceSort,
  getPriceSort,
  getRecencySort,
} from '@utils/ShareListSort';

const showedListComponent = {
  delivery: PreviewShareListBigSizeImage,
  ingredient: PreviewShareListLeftImage,
};

const ShareList = () => {
  const curShareFilterList = useRecoilValue(currentFilterShareList);
  const [curShareList, setCurShareList] = useRecoilState(currentShareList);
  const ShowedList = showedListComponent[curShareList];
  const data = listExample;

  const getData = (): listExampleType[] => {
    switch (curShareFilterList) {
      case 'price':
        return getPriceSort(data);
      case 'distance':
        return getPriceSort(data);
      case 'recency':
        return getRecencySort(data);
      case 'deadline':
        return getDeadlineSort(data);
    }
    return getPriceSort(data);
  };

  return (
    <S.Wrapper>
      <S.ListHeader>
        <MainHeader />
        <Tabs curShareList={curShareList} setCurShareList={setCurShareList} />
        <CategoryButton />
      </S.ListHeader>
      <S.ListContent>
        <S.EmptyArea />
        <ShowedList data={getData()} />
      </S.ListContent>
    </S.Wrapper>
  );
};

export default ShareList;
