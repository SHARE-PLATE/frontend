import { useState } from 'react';

import * as S from '@components/RemainedTime/RemainedTime.style';
import { useInterval } from '@hooks/useInterval';
import { getTimeDiffInHour } from '@utils/getTimeDiff';

interface RemainedTimePropsType {
  targetTime: string;
  position: S.BottomStylesPositionType;
}

const defaultTime = '00:00';
const changeInterval = 1000;

export const RemainedTime = ({ targetTime, position }: RemainedTimePropsType) => {
  const [showedTime, setShowedTime] = useState(defaultTime);

  useInterval(() => {
    const timeDiff = getTimeDiffInHour(targetTime);

    if (timeDiff === 'done') {
      setShowedTime('마감');
      return;
    }
    setShowedTime(timeDiff);
  }, changeInterval);

  return <S.RemainedTimeWrapper {...position}>{showedTime}</S.RemainedTimeWrapper>;
};
