import { listExampleType } from '@data/shareList';

export const getPriceSort = (data: listExampleType[]): listExampleType[] => {
  const sortData = data.sort((a: listExampleType, b: listExampleType) => a.price - b.price);

  return sortData;
};

export const getDistanceSort = (data: listExampleType[]) => {};

export const getRecencySort = (data: listExampleType[]) => {};

export const getDeadlineSort = (data: listExampleType[]): listExampleType[] => {
  const orderedDate = data.sort(
    (a: listExampleType, b: listExampleType) =>
      Number(new Date(a.appointmentDateTime)) - Number(new Date(b.appointmentDateTime)),
  );

  return orderedDate;
};
