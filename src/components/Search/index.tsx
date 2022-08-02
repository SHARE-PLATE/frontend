import { useRef, FormEvent, useState, ChangeEvent } from 'react';

import { useRecoilState } from 'recoil';

import Portal from '@components/Portal';
import { fullState } from '@store/portal';

import * as S from './Search.style';

const testWords = [
  { id: 0, name: '폴로', date: '07.31' },
  { id: 1, name: '뉴발란스', date: '07.31' },
  { id: 2, name: '모자', date: '07.31' },
];

const SEARCH_RECENT_KEY = 'searchRecent';

const getLocalStorageInfo = (key: string) => {
  const data = window.localStorage.getItem(key);
  const info = data && JSON.parse(data);
  return info;
};

const setLocalStorageInfo = ({ key, info }: { key: string; info: any }) => {
  window.localStorage.setItem(key, JSON.stringify(info));
};

const getMonthDate = () => {
  const dateData = new Date();
  const monthNumber = dateData.getMonth() + 1;
  const dateNumber = dateData.getDate();
  const month = monthNumber >= 10 ? monthNumber : `0${monthNumber}`;
  const date = dateNumber >= 10 ? dateNumber : `0${dateNumber}`;
  return `${month}.${date}`;
};

const SearchRecent = () => {
  const recentListInfo = getLocalStorageInfo(SEARCH_RECENT_KEY);
  console.log(recentListInfo);

  const recentList = testWords.map(({ id, name, date }) => (
    <S.SearchRecentItemWrapper key={id}>
      <S.SearchRecentItemInfo>
        <div>{`🔎 ${name}`}</div>
        <div>{date}</div>
      </S.SearchRecentItemInfo>
      <S.SearchRecentDeleteBtn>X</S.SearchRecentDeleteBtn>
    </S.SearchRecentItemWrapper>
  ));

  return (
    <S.SearchRecentWrapper>
      <S.SearchRecentHeader>
        최근 검색어<S.SearchRecentDeleteAllBtn>전체 삭제</S.SearchRecentDeleteAllBtn>
      </S.SearchRecentHeader>
      <S.SearchRecentListWrapper>{recentList}</S.SearchRecentListWrapper>
    </S.SearchRecentWrapper>
  );
};

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [isPortal, setIsPortal] = useRecoilState(fullState);
  const closeBtn = useRef<HTMLButtonElement>(null);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const localInfo = getLocalStorageInfo(SEARCH_RECENT_KEY);
    const date = getMonthDate();
    const prevSearchRecent = new Map(localInfo);
    prevSearchRecent.set(inputValue, { name: inputValue, date });

    setLocalStorageInfo({ key: SEARCH_RECENT_KEY, info: [...prevSearchRecent] });
  };

  return (
    <Portal type='full' isPortal={isPortal} setIsPortal={setIsPortal} closeBtn={closeBtn}>
      <S.SearchWrapper>
        <S.SearchHeader>
          <S.SearchForm onSubmit={handleSubmit}>
            <S.SearchInput value={inputValue} onChange={handleChangeInput} />
            <S.SearchSubmitBtn>🔎</S.SearchSubmitBtn>
          </S.SearchForm>
          <S.SearchCloseBtn ref={closeBtn}>X</S.SearchCloseBtn>
        </S.SearchHeader>
        <SearchRecent />
      </S.SearchWrapper>
    </Portal>
  );
};

export default Search;
