import { useEffect, useState } from 'react';

import { useRecoilValue, useResetRecoilState } from 'recoil';

import * as S from '@components/BottomMessage/BottomMessage.style';
import { useDebounce } from '@hooks/useDebounce';
import { bottomMessageState } from '@store/bottomMessage';

const BottomMessage = () => {
  const { message, trigger } = useRecoilValue(bottomMessageState);
  const [position, setPosition] = useState<S.PositionType>(null);
  const resetBottomMessage = useResetRecoilState(bottomMessageState);

  const handleAnimationEnd = () => {
    if (position === 'down') setPosition(null);
  };

  useDebounce({ func: () => resetBottomMessage(), delay: 3000, deps: [trigger] });

  useEffect(() => {
    if (trigger && !position) setPosition('up');
    if (!trigger && position === 'up') setPosition('down');
  }, [trigger]);

  return (
    <S.Wrapper position={position} onAnimationEnd={handleAnimationEnd}>
      <S.MessageWrapper>{message}</S.MessageWrapper>
    </S.Wrapper>
  );
};

export default BottomMessage;
