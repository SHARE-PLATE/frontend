import { useState } from 'react';

import * as S from '@components/RemainedTime/RemainedTime.style';
import { useInterval } from '@hooks/useInterval';
import { getTimeDiff } from '@utils/getTimeDiff';

interface RemainedTimePropsType {
  targetTime: string;
  position: S.RemainedTimeWrapperPropsType;
}

const changeInterval = 1000 * 30; // 30 seconds

export const RemainedTime = ({ targetTime, position }: RemainedTimePropsType) => {
  const [showedTime, setShowedTime] = useState(getTimeDiff(targetTime));

  useInterval(() => {
    const timeDiff = getTimeDiff(targetTime);
    setShowedTime(timeDiff);
  }, changeInterval);

  return <S.RemainedTimeWrapper {...position}>{showedTime}</S.RemainedTimeWrapper>;
};
