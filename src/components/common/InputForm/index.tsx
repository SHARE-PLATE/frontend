import * as S from '@components/common/InputForm/InputForm.style';

const InputForm = ({ ...props }) => {
  return (
    <S.Wrapper>
      <S.InputBox {...props} />
    </S.Wrapper>
  );
};

export default InputForm;
