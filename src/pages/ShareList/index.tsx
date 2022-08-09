import { useRecoilState, useRecoilValue } from 'recoil';

import CategoryButton from '@components/CategoryButton';
import PreviewShareListBigSizeImage from '@components/PreviewShareListBigSizeImage';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import ShareListHeader from '@components/ShareListHeader';
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

const ShareList = () => {
  const curShareFilterList = useRecoilValue(currentFilterShareList);
  const [curShareList, setCurShareList] = useRecoilState(currentShareList);

  const data = listExample;

  const getData = (): listExampleType[] => {
    switch (curShareFilterList) {
      case 'price':
        return getPriceSort(data);
      case 'distance':
        return getPriceSort(data);
      case 'recency':
        return getDeadlineSort(data);
      case 'deadline':
        return getDeadlineSort(data);
    }
    return getPriceSort(data);
  };

  return (
    <>
      <S.ListHeader>
        <ShareListHeader />
        <Tabs curShareList={curShareList} setCurShareList={setCurShareList} />
        <CategoryButton />
      </S.ListHeader>
      {curShareList === 'delivery' ? (
        <S.ListContents>
          <PreviewShareListBigSizeImage data={getData()} />
        </S.ListContents>
      ) : curShareList === 'ingredient' ? (
        <S.ListContents>
          <PreviewShareListLeftImage data={getData()} />
        </S.ListContents>
      ) : (
        ''
      )}
    </>
  );
};

export default ShareList;
