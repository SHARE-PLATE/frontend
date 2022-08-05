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
<<<<<<< HEAD
  display: inline-block;
  color: white;
  background-color: #ff5c21;
=======
  ${({ theme: { colors } }) => css`
    background-color: ${colors.orange2};
  `}
  display: inline-block;
  color: white;
>>>>>>> 013f609ed2997f37385d3cf5436b19d6dfacc6ee
  border-radius: 4px;

  font-size: 12px;
  padding: 4px;
`;

export default PersonnelStatus;
