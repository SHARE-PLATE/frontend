import { listExampleType } from '@data/shareList';

export const getPriceSort = (data: listExampleType[]): listExampleType[] => {
  const sortData = data.sort((a: listExampleType, b: listExampleType) => a.price - b.price);

  return sortData;
};

export const getDistanceSort = (data: listExampleType[]) => {};

export const getRecencySort = (data: listExampleType[]) => {
  const earlyDate = data.sort(
    (a: listExampleType, b: listExampleType) =>
      Number(new Date(b.createdDateTime)) - Number(new Date(a.createdDateTime)),
  );

  return earlyDate;
};

export const getDeadlineSort = (data: listExampleType[]): listExampleType[] => {
  const lateDate = data.sort(
    (a: listExampleType, b: listExampleType) =>
      Number(new Date(a.appointmentDateTime)) - Number(new Date(b.appointmentDateTime)),
  );

  return lateDate;
};
