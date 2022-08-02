import { useRef, FormEvent, useState, ChangeEvent } from 'react';

import { useRecoilState } from 'recoil';

import Portal from '@components/Portal';
import SearchRecent from '@components/SearchRecent';
import { searchRecent } from '@store/localStorage';
import { fullState } from '@store/portal';
import { getMonthDate } from '@utils/getTime';
import { setLocalStorageInfo, SEARCH_RECENT_KEY } from '@utils/useLocalStorage';

import * as S from './Search.style';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [isPortal, setIsPortal] = useRecoilState(fullState);
  const [recentListInfoMap, setRecentListInfoMap] = useRecoilState(searchRecent);
  const closeBtn = useRef<HTMLButtonElement>(null);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!inputValue.length) return;

    recentListInfoMap.set(inputValue, { name: inputValue, date: getMonthDate() });

    setLocalStorageInfo({ key: SEARCH_RECENT_KEY, info: [...recentListInfoMap] });
    setRecentListInfoMap(() => recentListInfoMap);
    setInputValue('');
    setIsPortal(false);
  };

  return (
    <Portal type='full' isPortal={isPortal} setIsPortal={setIsPortal} closeBtn={closeBtn}>
      <S.Wrapper>
        <S.Header>
          <S.Form onSubmit={handleSubmit}>
            <S.Input value={inputValue} onChange={handleChangeInput} />
            <S.SubmitBtn>🔎</S.SubmitBtn>
          </S.Form>
          <S.CloseBtn ref={closeBtn}>X</S.CloseBtn>
        </S.Header>
        <SearchRecent />
      </S.Wrapper>
    </Portal>
  );
};

export default Search;
