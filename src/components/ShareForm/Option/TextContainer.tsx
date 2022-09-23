import * as S from '@components/ShareForm/Option/ShareForm.style';
import InputForm from '@components/common/InputForm';
import { UseInputReturnType } from '@hooks/useInput';

interface TextContainerPropsType {
  titleInput: UseInputReturnType;
  priceInput: UseInputReturnType;
  originalPriceInput: UseInputReturnType;
}

const TextContainer = ({ titleInput, priceInput, originalPriceInput }: TextContainerPropsType) => {
  return (
    <S.TextContainer>
      <S.LongTextBlock>
        <InputForm type='text' placeholder='글 제목' {...titleInput} />
      </S.LongTextBlock>

      <S.TowTextBlock>
        <InputForm placeholder='₩ 가격' {...priceInput} />
        <InputForm placeholder='₩ 원가' {...originalPriceInput} />
      </S.TowTextBlock>
    </S.TextContainer>
  );
};

export default TextContainer;
