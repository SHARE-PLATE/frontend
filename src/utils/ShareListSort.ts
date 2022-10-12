import { FilterType } from '@store/filterShareList';
import { ShareListType } from '@type/shareList';

export const getSortData = (
  curShareFilterList: FilterType,
  data: ShareListType[],
): ShareListType[] => {
  switch (curShareFilterList) {
    case 'price':
      return getPriceSort(data);
    case 'distance':
      return getDistanceSort(data);
    case 'recency':
      return getRecencySort(data);
    case 'deadline':
      return getDeadlineSort(data);
  }

  return getPriceSort(data);
};

const getPriceSort = (data: ShareListType[]): ShareListType[] => {
  const newArray = [...data];

  const sortData = newArray.sort((a: ShareListType, b: ShareListType) => a.price - b.price);

  return sortData;
};

const getDistanceSort = (data: ShareListType[]) => {
  return data;
};

export const getRecencySort = (data: ShareListType[]) => {
  const newArray = [...data];

  const earlyDate = newArray.sort(
    (a: ShareListType, b: ShareListType) =>
      Number(new Date(b.createdDateTime)) - Number(new Date(a.createdDateTime)),
  );

  return earlyDate;
};

export const getDeadlineSort = (data: ShareListType[]): ShareListType[] => {
  const newArray = [...data];

  const lateDate = newArray.sort(
    (a: ShareListType, b: ShareListType) =>
      Number(new Date(a.closedDateTime)) - Number(new Date(b.closedDateTime)),
  );

  return lateDate;
};
