import * as S from '@components/ShareForm/ShareForm.style';
import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import InputForm from '@components/common/InputForm';
import { UseInputReturnType } from '@hooks/useInput';

interface TextContainerPropsType {
  titleInput: UseInputReturnType;
  priceInput: UseInputReturnType;
  originalPriceInput: UseInputReturnType;
  appointmentDateTime: string;
  setAppointmentDateTime: React.Dispatch<React.SetStateAction<string>>;
  appointmentTime: string;
  setAppointmentTime: React.Dispatch<React.SetStateAction<string>>;
  recruitmentValue: number;
  setRecruitmentValue: React.Dispatch<React.SetStateAction<number>>;
}

const TextContainer = ({
  titleInput,
  priceInput,
  originalPriceInput,
  appointmentDateTime,
  setAppointmentDateTime,
  appointmentTime,
  setAppointmentTime,
  recruitmentValue,
  setRecruitmentValue,
}: TextContainerPropsType) => {
  const handelChangeDateTime = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setAppointmentDateTime(target.value);

  const handelChangeTime = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setAppointmentTime(target.value);

  const plusCount = () => {
    const maxCount = 99;
    if (recruitmentValue === maxCount) return;
    setRecruitmentValue((prev) => prev + 1);
  };

  const minusCount = () => {
    const minCount = 1;
    if (recruitmentValue === minCount) return;
    setRecruitmentValue((prev) => prev - 1);
  };

  return (
    <S.TextContainer>
      <S.LongTextBlock>
        <InputForm type='text' placeholder='글 제목' {...titleInput} />
      </S.LongTextBlock>

      <S.TowTextBlock>
        <InputForm placeholder='₩ 가격' {...priceInput} />
        <InputForm placeholder='₩ 원가' {...originalPriceInput} />
      </S.TowTextBlock>

      <S.LongTextBlock>
        <button>장소선택</button>
      </S.LongTextBlock>

      <S.TowTextBlock>
        <S.DateInputForm type='date' value={appointmentDateTime} onChange={handelChangeDateTime} />
        <S.DateInputForm type='time' value={appointmentTime} onChange={handelChangeTime} />
      </S.TowTextBlock>

      <S.TowTextBlock>
        <S.CountContainer>
          <S.ButtonContainer>
            <S.CountButton type='button' onClick={minusCount}>
              <Icon iconName='CountDown' />
            </S.CountButton>
            <span>{recruitmentValue}</span>
            <S.CountButton type='button' onClick={plusCount}>
              <Icon iconName='CountUp' />
            </S.CountButton>
          </S.ButtonContainer>
          <span>명 모집</span>
        </S.CountContainer>
        <Button size='large' onClick={() => {}}>
          <span>옵션선택</span>
        </Button>
      </S.TowTextBlock>
    </S.TextContainer>
  );
};

export default TextContainer;
