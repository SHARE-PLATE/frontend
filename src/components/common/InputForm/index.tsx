import * as S from '@components/common/InputForm/InputForm.style';

type InputFormPropsType = {
  inputValue: string;
  onChange?: ({ target }: { target: HTMLInputElement }) => void;
  [x: string]: any;
};

const InputForm: React.FC<InputFormPropsType> = ({ inputValue, onChange, ...props }) => {
  return (
    <S.Wrapper>
      <S.InputBox value={inputValue} onChange={onChange} {...props} />
    </S.Wrapper>
  );
};

export default InputForm;
