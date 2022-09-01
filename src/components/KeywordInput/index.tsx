import * as S from '@components/KeywordInput/KeywordInput.style';
import { UseInputReturnType } from '@hooks/useInput';
interface KeywordInputPropsType {
  keywordInputBar: UseInputReturnType;
}

const KeywordInput = ({ keywordInputBar }: KeywordInputPropsType) => {
  return (
    <S.InputFieldWrapper>
      <S.Input
        type='text'
        value={keywordInputBar.inputValue}
        onChange={keywordInputBar.onChange}
        placeholder='키워드를 입력해주세요. (예: 짜장면)'
      />
      <S.SubmitButton>등록</S.SubmitButton>
    </S.InputFieldWrapper>
  );
};

export default KeywordInput;
