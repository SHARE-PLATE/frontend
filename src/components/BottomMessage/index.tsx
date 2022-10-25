import { useEffect, useState } from 'react';

import { useRecoilValue, useResetRecoilState } from 'recoil';

import * as S from '@components/BottomMessage/BottomMessage.style';
import { useDebounce } from '@hooks/useDebounce';
import { bottomMessageState, BottomMessageType } from '@store/bottomMessage';

const BottomMessage = () => {
  const { message, trigger } = useRecoilValue(bottomMessageState);
  // set bottom message separately to show message when position is "down"
  const [bottomMessage, setBottomMessage] = useState<BottomMessageType>(null);
  const [position, setPosition] = useState<S.PositionType>(null);
  const resetBottomMessage = useResetRecoilState(bottomMessageState);

  const handleAnimationEnd = () => {
    if (position === 'down') setPosition(null);
  };

  useDebounce({ func: () => resetBottomMessage(), delay: 4000, deps: [trigger] });

  useEffect(() => {
    // position condition is required for first rendering with no bottom message component
    if (!trigger && position === 'up') {
      setPosition('down');
      return;
    }
    if (trigger && position !== 'up') {
      setPosition('up');
    }
    setBottomMessage(message);
  }, [trigger]);

  return (
    <S.Wrapper position={position} onAnimationEnd={handleAnimationEnd}>
      <S.MessageWrapper>{bottomMessage}</S.MessageWrapper>
    </S.Wrapper>
  );
};

export default BottomMessage;
