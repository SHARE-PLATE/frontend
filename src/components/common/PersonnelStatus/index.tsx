import Icon from '@components/common/Icon';
import { ICON_NAME } from '@components/common/Icon/constants';
import * as S from '@components/common/PersonnelStatus/PersonnelStatus.style';

interface PersonnelStatusPropsType {
  curPersonnel: number;
  totalPersonnel: number;
}

const PersonnelStatus = ({ curPersonnel, totalPersonnel }: PersonnelStatusPropsType) => {
  return (
    <S.Wrapper>
      <Icon iconName={ICON_NAME.USER} />
      <S.Content>
        {curPersonnel} / {totalPersonnel}
      </S.Content>
    </S.Wrapper>
  );
};

export default PersonnelStatus;
