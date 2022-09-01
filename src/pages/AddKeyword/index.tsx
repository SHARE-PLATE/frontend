import { useLocation } from 'react-router-dom';

import KeywordInput from '@components/KeywordInput';
import RegisteredKeyword from '@components/RegisteredKeyword';
import BackTitleHeader from '@components/common/BackTitleHeader';
import useInput from '@hooks/useInput';
import * as S from '@pages/AddKeyword/AddKeyword.style';
const AddKeyword = () => {
  const { state } = useLocation() as {
    state: string;
  };

  const keywordInputBar = useInput('');

  return (
    <S.Wrapper>
      <BackTitleHeader title='알림 키워드 추가' />
      {state ? <S.Header>{state}</S.Header> : <span>주소 추가 버튼</span>}
      <KeywordInput {...{ keywordInputBar }} />
      <S.RegisteredKeywordWrapper>
        <RegisteredKeyword />
      </S.RegisteredKeywordWrapper>
      <div></div>
    </S.Wrapper>
  );
};

export default AddKeyword;
