import { useState } from 'react';

import * as S from '@components/RemainedTime/RemainedTime.style';
import { useInterval } from '@hooks/useInterval';
import { defaultTime, getTimeDiff } from '@utils/getTimeDiff';

interface RemainedTimePropsType {
  targetTime: string;
  position: S.RemainedTimeWrapperPropsType;
}

const changeInterval = 1000 * 60; // a minute

export const RemainedTime = ({ targetTime, position }: RemainedTimePropsType) => {
  const [showedTime, setShowedTime] = useState(defaultTime);

  useInterval(() => {
    const timeDiff = getTimeDiff(targetTime);
    setShowedTime(timeDiff);
  }, changeInterval);

  return <S.RemainedTimeWrapper {...position}>{showedTime}</S.RemainedTimeWrapper>;
};
