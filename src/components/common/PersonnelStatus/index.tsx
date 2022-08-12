import Icon from '@components/common/Icon';
import * as S from '@components/common/PersonnelStatus/PersonnelStatus.style';

interface PersonnelStatusPropsType {
  curPersonnel: number;
  totalPersonnel: number;
}

const PersonnelStatus = ({ curPersonnel, totalPersonnel }: PersonnelStatusPropsType) => {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <Icon iconName='User' />
      </S.IconWrapper>
      <S.Content>
        {curPersonnel} / {totalPersonnel}
      </S.Content>
    </S.Wrapper>
  );
};

export default PersonnelStatus;
