import { useRecoilValueLoadable } from 'recoil';

import { KeywordItem } from '@components/KeywordBox/KeywordBox.style';
import * as S from '@components/RegisteredKeyword/RegisteredKeyword.style';
import Icon from '@components/common/Icon';
import { keyword } from '@data/keyword';
import { getRegisteredKeywordData } from '@store/keyword';

interface RegisteredKeywordPropsType {
  regionName: string;
}

const RegisteredKeyword = ({ regionName }: RegisteredKeywordPropsType) => {
  const exampleKeyword = keyword;
  const { state, contents } = useRecoilValueLoadable(getRegisteredKeywordData(regionName));

  return (
    <S.Wrapper>
      <S.SubHeader>
        <span>등록된 키워드 {exampleKeyword.length}</span>
        <span>/10</span>
      </S.SubHeader>
      <S.ContentContainer>
        {exampleKeyword.map((item) => (
          <KeywordItem key={item}>
            {item}
            <S.IconWrapper>
              <Icon iconName='X_Icon' iconSize={0.5} />
            </S.IconWrapper>
          </KeywordItem>
        ))}
      </S.ContentContainer>
    </S.Wrapper>
  );

  switch (state) {
    case 'hasValue':
      return (
        <S.Wrapper>
          <S.SubHeader>
            <span>등록된 키워드 {exampleKeyword.length}</span>
            <span>/10</span>
          </S.SubHeader>
          <S.ContentContainer>
            {exampleKeyword.map((item) => (
              <KeywordItem key={item}>
                {item}
                <S.IconWrapper>
                  <Icon iconName='X_Icon' iconSize={0.5} />
                </S.IconWrapper>
              </KeywordItem>
            ))}
          </S.ContentContainer>
        </S.Wrapper>
      );
    case 'loading':
      return <div>로딩 페이지</div>;
    case 'hasError':
      return <div>에러 페이지</div>;
  }
};

export default RegisteredKeyword;
