import { thumbnailUrlListType } from '@type/shareList';

export const getSortData = (
  curShareFilterList: string,
  data: thumbnailUrlListType[],
): thumbnailUrlListType[] => {
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

const getPriceSort = (data: thumbnailUrlListType[]): thumbnailUrlListType[] => {
  const newArray = [...data];

  const sortData = newArray.sort(
    (a: thumbnailUrlListType, b: thumbnailUrlListType) => a.price - b.price,
  );

  return sortData;
};

const getDistanceSort = (data: thumbnailUrlListType[]) => {
  return data;
};

export const getRecencySort = (data: thumbnailUrlListType[]) => {
  const newArray = [...data];

  const earlyDate = newArray.sort(
    (a: thumbnailUrlListType, b: thumbnailUrlListType) =>
      Number(new Date(b.createdDateTime)) - Number(new Date(a.createdDateTime)),
  );

  return earlyDate;
};

export const getDeadlineSort = (data: thumbnailUrlListType[]): thumbnailUrlListType[] => {
  const newArray = [...data];

  const lateDate = newArray.sort(
    (a: thumbnailUrlListType, b: thumbnailUrlListType) =>
      Number(new Date(a.appointmentDateTime)) - Number(new Date(b.appointmentDateTime)),
  );

  return lateDate;
};
