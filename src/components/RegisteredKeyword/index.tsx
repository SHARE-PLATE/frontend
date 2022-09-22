import { Dispatch, useEffect } from 'react';

import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import { deleteRegisteredKeywords } from '@api/keyword';
import * as S from '@components/RegisteredKeyword/RegisteredKeyword.style';
import RegisteredKeywordItem from '@components/RegisteredKeyword/RegisteredKeywordItem';
import { getRegisteredKeywordData, registeredKeywordTrigger } from '@store/keyword';
import { keywordsType } from '@type/keyword';

interface RegisteredKeywordPropsType {
  regionName: string;
  setKeywordLength: Dispatch<React.SetStateAction<number>>;
  setCurLatitudeLongitude: Dispatch<
    React.SetStateAction<{
      lat: string;
      lng: string;
    }>
  >;
}

const RegisteredKeyword = ({
  regionName,
  setKeywordLength,
  setCurLatitudeLongitude,
}: RegisteredKeywordPropsType) => {
  const { state, contents } = useRecoilValueLoadable(getRegisteredKeywordData(regionName));
  const setRegisteredKeywordTrigger = useSetRecoilState(registeredKeywordTrigger);

  const buttonClickHandler = async (id: number) => {
    if (!id) return false;
    const isSuccessFetch = await deleteRegisteredKeywords(id);

    if (isSuccessFetch) setRegisteredKeywordTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    if (contents.keywords) setKeywordLength(contents.keywords.length);
    setCurLatitudeLongitude({ lat: contents.longitude, lng: contents.latitude });
  }, [contents]);

  const getRegisterData = (state: 'hasValue' | 'loading' | 'hasError') => {
    switch (state) {
      case 'hasValue':
        return (
          <S.ContentContainer>
            {contents.keywords.map(({ id, contents }: keywordsType) => (
              <RegisteredKeywordItem
                key={id}
                id={id}
                contents={contents}
                handlerFnc={buttonClickHandler}
              />
            ))}
          </S.ContentContainer>
        );
      case 'loading':
        return <div>로딩 페이지</div>;
      case 'hasError':
        return <div>에러 페이지</div>;
    }
  };

  return (
    <S.Wrapper>
      <S.SubHeader>
        {!!contents.keywords ? (
          <span>등록된 키워드 {contents.keywords.length}</span>
        ) : (
          <span>등록된 키워드 0</span>
        )}
        <span>/10</span>
      </S.SubHeader>
      {getRegisterData(state)}
    </S.Wrapper>
  );
};

export default RegisteredKeyword;
