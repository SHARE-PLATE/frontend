import styled, { css } from 'styled-components';

import Icon from '@components/common/Icon';
import { ICON_NAME } from '@components/common/Icon/constants';

interface PersonnelStatusPropsType {
  curPersonnel: number;
  totalPersonnel: number;
}

const PersonnelStatus = ({ curPersonnel, totalPersonnel }: PersonnelStatusPropsType) => {
  return (
    <Wrapper>
      <Icon iconName={ICON_NAME.USER} />
      <Content>
        {curPersonnel} / {totalPersonnel}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline;
  text-align: center;
  justify-content: center;
`;

const Content = styled.span`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.orange2};
  `}
  display: inline-block;
  color: white;
  border-radius: 4px;

  font-size: 12px;
  padding: 4px;
`;

export default PersonnelStatus;
