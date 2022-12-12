import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';
import { FlattenSimpleInterpolation } from 'styled-components';

import * as S from '@components/TopFixedWarning/TopFixedWarning.style';
import Icon from '@components/common/Icon';
import useTimeout from '@hooks/useTimeout';
import { socketConnectState } from '@store/socket';

type TopFixedWarningPropsType = {
  text: string;
  isShowed?: boolean;
  otherStyle?: FlattenSimpleInterpolation;
};

const waitingCheckTime = 5000; // ms

const TopFixedWaring = ({ text, isShowed, otherStyle }: TopFixedWarningPropsType) => {
  const socketConnect = useRecoilValue(socketConnectState);
  const [isConnected, setIsConnected] = useState(true);
  const [timeOver, setTimeOver] = useState(false);

  const handleClickEvent = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (!timeOver) return;
    setIsConnected(socketConnect === 'connected');
  }, [socketConnect]);

  useTimeout(() => {
    setTimeOver(true);
    setIsConnected(socketConnect === 'connected');
  }, waitingCheckTime);

  return (
    <S.Wrapper
      isShowed={isShowed || !isConnected}
      otherStyle={otherStyle}
      onClick={handleClickEvent}
    >
      <Icon iconName='Warning' iconSize={1.25} />
      <S.TextWrapper>{text}</S.TextWrapper>
    </S.Wrapper>
  );
};

export default TopFixedWaring;
