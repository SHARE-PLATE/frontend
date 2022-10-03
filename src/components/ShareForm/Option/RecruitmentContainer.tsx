import * as S from '@components/ShareForm/Option/ShareForm.style';
import Icon from '@components/common/Icon';

interface RecruitmentContainerPropsType {
  recruitmentValue: number;
  setRecruitmentValue: React.Dispatch<React.SetStateAction<number>>;
}

const maxCount = 99;
const minCount = 1;

const RecruitmentContainer = ({
  recruitmentValue,
  setRecruitmentValue,
}: RecruitmentContainerPropsType) => {
  const plusCount = () => {
    if (recruitmentValue >= maxCount) return;
    setRecruitmentValue((prev) => prev + 1);
  };

  const minusCount = () => {
    if (recruitmentValue <= minCount) return;
    setRecruitmentValue((prev) => prev - 1);
  };

  return (
    <S.CountContainer>
      <S.ButtonContainer>
        <S.CountButton type='button' onClick={minusCount} isClickable={recruitmentValue > minCount}>
          <Icon iconName='CountDown' />
        </S.CountButton>
        <span>
          {recruitmentValue < 10 && 0}
          {recruitmentValue}
        </span>
        <S.CountButton type='button' onClick={plusCount} isClickable={recruitmentValue < maxCount}>
          <Icon iconName='CountUp' />
        </S.CountButton>
      </S.ButtonContainer>
      <S.RecruitmentText>명 모집</S.RecruitmentText>
    </S.CountContainer>
  );
};

export default RecruitmentContainer;
