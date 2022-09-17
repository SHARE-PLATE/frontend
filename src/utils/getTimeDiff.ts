import moment from 'moment';

const getTwoLengthTime = (number: number) => {
  return number < 10 ? `0${number}` : number;
};

export const getTimeDiffInHour = (targetTime: string) => {
  const curTime = moment();
  const appointTime = moment(targetTime);
  const diffTime = appointTime.diff(curTime, 'seconds');

  if (diffTime >= 3600) return 'over' as const; // more than 1 hour
  if (diffTime <= 0) return 'done' as const; // earlier than now

  const minutes = getTwoLengthTime(Math.floor(diffTime / 60));
  const seconds = getTwoLengthTime(diffTime % 60);
  const remainedTime = `${minutes}:${seconds}`;

  return remainedTime;
};

export const calcTwoTimeDifference = (currentDate: string) => {
  const updateTime = new Date();
  const curDate = new Date(currentDate);
  const diffMinutes = curDate.getTime() - updateTime.getTime();
  const result = Math.abs(diffMinutes / (1000 * 60));

  if (result < 60) return `${result.toFixed()}분전`;
  else if (result < 1440) return `${(result / 60).toFixed()}시간 ${(result % 60).toFixed()}분전`;
  return `${(result / 1440).toFixed()}일 전`;
};
