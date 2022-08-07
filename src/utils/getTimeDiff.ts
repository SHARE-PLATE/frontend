import moment from 'moment';

const getTwoLengthTime = (number: number) => {
  return number < 10 ? `0${number}` : number;
};

export const getTimeDiffInHour = (targetTime: string) => {
  const curTime = moment();
  const appointTime = moment(targetTime);
  const diffTime = appointTime.diff(curTime, 'seconds');

  if (diffTime >= 3600) return 'over'; // more than 1 hour
  if (diffTime <= 0) return 'done'; // earlier than now

  const minutes = getTwoLengthTime(Math.floor(diffTime / 60));
  const seconds = getTwoLengthTime(diffTime % 60);
  const remainedTime = `${minutes}:${seconds}`;

  return remainedTime;
};
