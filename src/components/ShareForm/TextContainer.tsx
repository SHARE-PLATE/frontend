import * as S from '@components/ShareForm/ShareForm.style';
import InputForm from '@components/common/InputForm';
import { UseInputReturnType } from '@hooks/useInput';

interface TextContainerPropsType {
  titleInput: UseInputReturnType;
  priceInput: UseInputReturnType;
  originalPriceInput: UseInputReturnType;
  recruitmentInput: UseInputReturnType;
  appointmentDateTime: string;
  setAppointmentDateTime: React.Dispatch<React.SetStateAction<string>>;
}

const TextContainer = ({
  titleInput,
  priceInput,
  originalPriceInput,
  recruitmentInput,
  appointmentDateTime,
  setAppointmentDateTime,
}: TextContainerPropsType) => {
  const handelChangeDateTime = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setAppointmentDateTime(target.value);

  return (
    <S.TextContainer>
      <InputForm type='text' placeholder='글 제목' {...titleInput} />

      <S.TowTextBlock>
        <InputForm placeholder='₩ 가격' {...priceInput} />
        <InputForm placeholder='₩ 원가' {...originalPriceInput} />
      </S.TowTextBlock>

      <S.LongTextBlock>
        <S.TowTextBlock>
          <InputForm placeholder='모집 인원' {...recruitmentInput} />
        </S.TowTextBlock>
        <S.TowTextBlock>
          <S.DateInputForm
            type='date'
            placeholder='D-00 일'
            value={appointmentDateTime}
            onChange={handelChangeDateTime}
          />
        </S.TowTextBlock>
      </S.LongTextBlock>
    </S.TextContainer>
  );
};

export default TextContainer;
