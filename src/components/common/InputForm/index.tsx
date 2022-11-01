import * as S from '@components/common/InputForm/InputForm.style';

export type InputFormPropsType = {
  inputValue: string;
  onChange?: ({ target }: { target: HTMLInputElement }) => void;
  unit?: string;
  isValue?: boolean;
  [x: string]: any;
};

const InputForm: React.FC<InputFormPropsType> = ({
  inputValue,
  onChange,
  unit,
  isValue,
  ...props
}) => {
  return (
    <S.Wrapper>
      {unit && <S.UnitWrapper isValue={isValue}>{unit}</S.UnitWrapper>}
      <S.InputBox value={inputValue} onChange={onChange} {...props} />
    </S.Wrapper>
  );
};

export default InputForm;
