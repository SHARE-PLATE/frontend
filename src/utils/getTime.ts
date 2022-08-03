export const getMonthDate = () => {
  const dateData = new Date();
  const monthNumber = dateData.getMonth() + 1;
  const dateNumber = dateData.getDate();
  const month = monthNumber >= 10 ? monthNumber : `0${monthNumber}`;
  const date = dateNumber >= 10 ? dateNumber : `0${dateNumber}`;
  return `${month}.${date}`;
};
