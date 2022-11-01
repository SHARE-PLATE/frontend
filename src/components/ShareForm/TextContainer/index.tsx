import { TwoTextBlock } from '@components/ShareForm/ShareForm.style';
import * as S from '@components/ShareForm/TextContainer/TextContainer.style';
import InputForm from '@components/common/InputForm';
import { UseInputReturnType } from '@hooks/useInput';
import { getPriceType } from '@utils/getPriceType';

interface TextContainerPropsType {
  titleInput: UseInputReturnType;
  priceInput: UseInputReturnType;
  originalPriceInput: UseInputReturnType;
}

const priceMaxLength = 9; // 9,999,999

const TextContainer = ({ titleInput, priceInput, originalPriceInput }: TextContainerPropsType) => {
  const { inputValue: priceInputValue } = priceInput;
  const { inputValue: originalPriceInputValue } = originalPriceInput;
  const isPrice = !!priceInputValue.length || priceInputValue === '0';
  const isOriginalPrice = !!originalPriceInputValue.length || originalPriceInputValue === '0';
  priceInput.inputValue = priceInputValue && getPriceType({ price: priceInputValue });
  originalPriceInput.inputValue =
    originalPriceInputValue && getPriceType({ price: originalPriceInputValue });

  return (
    <S.TextContainer>
      <InputForm type='text' placeholder='제목' {...titleInput} />

      <TwoTextBlock>
        <InputForm
          placeholder='가격'
          unit='₩'
          isValue={isPrice}
          {...priceInput}
          maxLength={priceMaxLength}
        />
        <InputForm
          placeholder='원가'
          unit='₩'
          isValue={isOriginalPrice}
          {...originalPriceInput}
          maxLength={priceMaxLength}
        />
      </TwoTextBlock>
    </S.TextContainer>
  );
};

export default TextContainer;
