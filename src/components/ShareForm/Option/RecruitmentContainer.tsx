import * as S from '@components/ShareForm/Option/ShareForm.style';
import Icon from '@components/common/Icon';

interface RecruitmentContainerPropsType {
  recruitmentValue: number;
  setRecruitmentValue: React.Dispatch<React.SetStateAction<number>>;
}

const RecruitmentContainer = ({
  recruitmentValue,
  setRecruitmentValue,
}: RecruitmentContainerPropsType) => {
  const plusCount = () => {
    const maxCount = 99;
    if (recruitmentValue >= maxCount) return;
    setRecruitmentValue((prev) => prev + 1);
  };

  const minusCount = () => {
    const minCount = 1;
    if (recruitmentValue <= minCount) return;
    setRecruitmentValue((prev) => prev - 1);
  };

  return (
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
  );
};

export default RecruitmentContainer;
