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
const NO_RECENT_LIST = '최근 검색 기록이 없습니다';

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

  const noRecentList = <S.NoRecentListWrapper>{NO_RECENT_LIST}</S.NoRecentListWrapper>;
  const recentList = testWords.map(({ id, name, date }) => (
    <S.RecentItemWrapper key={id}>
      <S.RecentItemInfo>
        <div>{`🔎 ${name}`}</div>
        <div>{date}</div>
      </S.RecentItemInfo>
      <S.RecentDeleteBtn>X</S.RecentDeleteBtn>
    </S.RecentItemWrapper>
  ));

  return (
    <S.RecentWrapper>
      <S.RecentHeader>
        최근 검색어<S.RecentDeleteAllBtn>전체 삭제</S.RecentDeleteAllBtn>
      </S.RecentHeader>
      <S.RecentListWrapper>{recentListInfo ? recentList : noRecentList}</S.RecentListWrapper>
    </S.RecentWrapper>
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
    if (!inputValue.length) return;

    const localInfo = getLocalStorageInfo(SEARCH_RECENT_KEY);
    const date = getMonthDate();
    const prevSearchRecent = new Map(localInfo);
    prevSearchRecent.set(inputValue, { name: inputValue, date });

    setLocalStorageInfo({ key: SEARCH_RECENT_KEY, info: [...prevSearchRecent] });
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
