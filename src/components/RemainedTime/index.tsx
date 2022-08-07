import { useState } from 'react';

import * as S from '@components/RemainedTime/RemainedTime.style';
import { useInterval } from '@hooks/useInterval';
import 'moment/locale/ko';
import { getTimeDiffInHour } from '@utils/getTimeDiff';

const defaultTime = '00:00';
const changeInterval = 1000;

export const RemainedTime = ({ targetTime }: { targetTime: string }) => {
  const [showedTime, setShowedTime] = useState(defaultTime);

  useInterval(() => {
    const timeDiff = getTimeDiffInHour(targetTime);

    if (timeDiff === 'done') {
      setShowedTime('마감');
      return;
    }
    setShowedTime(timeDiff);
  }, changeInterval);

  return <S.RemainedTimeWrapper>{showedTime}</S.RemainedTimeWrapper>;
};
