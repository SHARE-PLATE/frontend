import moment from 'moment';

export const timeIntervals = 15;

export const timeFormat = 'HH:mm A';

export const getCurrentTime = () => {
  const startTime = moment().locale('en');
  const remainder = timeIntervals - (startTime.minute() % timeIntervals);
  const currentTime = moment(startTime).add(remainder, 'minutes');

  return currentTime;
};
