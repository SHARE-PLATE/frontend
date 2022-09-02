import { useRef, FormEvent, useState, ChangeEvent } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import Portal from '@components/Portal';
import SearchPopular from '@components/SearchPopular';
import * as S from '@components/SearchPortal/Search.style';
import SearchRecent from '@components/SearchRecent';
import Icon from '@components/common/Icon';
import { inputKeyword } from '@constants/mentions';
import { SEARCH_RECENT } from '@constants/words';
import { currentMapKey, searchRecent } from '@store/localStorage';
import { PortalNameType, portalState } from '@store/portal';
import { getMonthDate } from '@utils/getTime';
import { setLocalStorageInfo } from '@utils/localStorage';

const portalName: PortalNameType = 'search';

const SearchPortal = () => {
  const [inputValue, setInputValue] = useState('');
  const [recentListInfoMap, setRecentListInfoMap] = useRecoilState(searchRecent);
  const setCurrentMapKey = useSetRecoilState(currentMapKey);
  const setPortal = useSetRecoilState(portalState);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent | string) => {
    let value;
    if (typeof event === 'string') {
      value = event;
    } else {
      event.preventDefault();
      value = inputValue;
      if (!value.length) return;
      inputRef.current?.blur(); // 모바일에서 submit시 타자 영역 없어지도록 함
    }

    recentListInfoMap.set(value, { name: value, date: getMonthDate() });

    setLocalStorageInfo({ key: SEARCH_RECENT, info: [...recentListInfoMap] });
    setRecentListInfoMap(() => recentListInfoMap);
    setCurrentMapKey(value);
    setInputValue('');
    setPortal(null);
    navigate('/search-share');
  };

  return (
    <Portal type='full' portalName={portalName} closeBtn={closeBtn}>
      <S.Wrapper>
        <S.Header>
          <S.FormWrapper>
            <S.CloseBtn ref={closeBtn}>
              <Icon iconName='Back' />
            </S.CloseBtn>
            <S.Form onSubmit={handleSubmit}>
              <S.Input
                value={inputValue}
                onChange={handleChangeInput}
                placeholder={inputKeyword}
                ref={inputRef}
              />
              {/* <S.SubmitBtn></S.SubmitBtn> 추후 검색 입력 버튼 사용 시*/}
            </S.Form>
          </S.FormWrapper>
          <SearchPopular clickHandler={handleSubmit} />
        </S.Header>
        <SearchRecent clickHandler={handleSubmit} />
      </S.Wrapper>
    </Portal>
  );
};

export default SearchPortal;
