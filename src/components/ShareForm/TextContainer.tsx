import * as S from '@components/ShareForm/ShareForm.style';
import InputForm from '@components/common/InputForm';
import { UseInputReturnType } from '@hooks/useInput';

interface TextContainerPropsType {
  titleInput: UseInputReturnType;
  priceInput: UseInputReturnType;
  originalPriceInput: UseInputReturnType;
  recruitmentInput: UseInputReturnType;
}

const TextContainer = ({
  titleInput,
  priceInput,
  originalPriceInput,
  recruitmentInput,
}: TextContainerPropsType) => {
  return (
    <S.TextContainer>
      <InputForm type='text' placeholder='글 제목' />

      <S.TowTextBlock>
        <InputForm placeholder='₩ 가격' />
        <InputForm placeholder='₩ 원가' />
      </S.TowTextBlock>

      <S.LongTextBlock>
        <S.TowTextBlock>
          <InputForm placeholder='모집 인원' />
        </S.TowTextBlock>
        <S.TowTextBlock>
          <InputForm type='date' placeholder='D-00 일' />
        </S.TowTextBlock>
      </S.LongTextBlock>
    </S.TextContainer>
  );
};

export default TextContainer;
