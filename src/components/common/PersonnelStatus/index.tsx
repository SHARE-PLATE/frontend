import Icon from '@components/common/Icon';
import * as S from '@components/common/PersonnelStatus/PersonnelStatus.style';

interface PersonnelStatusPropsType {
  curPersonnel: number;
  totalPersonnel: number;
}

const PersonnelStatus = ({ curPersonnel, totalPersonnel }: PersonnelStatusPropsType) => {
  return (
    <S.Wrapper>
      <Icon iconName='User' iconSize={0.85} />
      <S.Content>
        <span>{curPersonnel}</span>
        <span>/</span>
        <span>{totalPersonnel}</span>
      </S.Content>
    </S.Wrapper>
  );
};

export default PersonnelStatus;
