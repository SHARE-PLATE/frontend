import { useRecoilValue } from 'recoil';

import CategoryButton from '@components/CategoryButton';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import ShareListHeader from '@components/ShareListHeader';
import Tabs from '@components/Tabs';
import { listExample, listExampleType } from '@data/shareList';
import { currentShareList } from '@store/shareList';
import {
  getDeadlineSort,
  getDistanceSort,
  getPriceSort,
  getRecencySort,
} from '@utils/ShareListSort';

const ShareList = () => {
  const curShareList = useRecoilValue(currentShareList);
  const data = listExample;

  const getData = (): listExampleType[] => {
    switch (curShareList) {
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
      <ShareListHeader />
      <Tabs firstTitle='배달쉐어' secondTitle='재료쉐어' />
      <CategoryButton />
      <PreviewShareListLeftImage data={getData()} />
    </>
  );
};

export default ShareList;
