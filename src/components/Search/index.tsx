import { useRef } from 'react';

import { useRecoilState } from 'recoil';

import Portal from '@components/Portal';
import { fullState } from '@store/portal';

import * as S from './Search.style';

const Search = () => {
  const [isPortal, setIsPortal] = useRecoilState(fullState);
  const closeBtn = useRef<HTMLButtonElement>(null);

  return (
    <Portal type='full' isPortal={isPortal} setIsPortal={setIsPortal} closeBtn={closeBtn}>
      <S.SearchWrapper>
        <S.SearchCloseBtn ref={closeBtn}>X</S.SearchCloseBtn>
        <S.SearchInput />
      </S.SearchWrapper>
    </Portal>
  );
};

export default Search;
