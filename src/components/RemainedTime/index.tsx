import { useState } from 'react';

import * as S from '@components/RemainedTime/RemainedTime.style';
import { useInterval } from '@hooks/useInterval';
import { getTimeDiffInHour } from '@utils/getTimeDiff';

interface RemainedTimePropsType {
  targetTime: string;
  locationBottom?: boolean;
}

const defaultTime = '00:00';
const changeInterval = 1000;

export const RemainedTime = ({ targetTime, locationBottom = false }: RemainedTimePropsType) => {
  const [showedTime, setShowedTime] = useState(defaultTime);

  useInterval(() => {
    const timeDiff = getTimeDiffInHour(targetTime);

    if (timeDiff === 'done') {
      setShowedTime('마감');
      return;
    }
    setShowedTime(timeDiff);
  }, changeInterval);

  return (
    <S.RemainedTimeWrapper locationBottom={locationBottom}>{showedTime}</S.RemainedTimeWrapper>
  );
};
