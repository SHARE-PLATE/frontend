import styled, { css } from 'styled-components';

import Icon from '@components/common/Icon';

interface PersonnelStatusPropsType {
  curPersonnel: number;
  totalPersonnel: number;
}

const PersonnelStatus = ({ curPersonnel, totalPersonnel }: PersonnelStatusPropsType) => {
  return (
    <Wrapper>
      <Icon iconName='User' />
      <Content>
        {curPersonnel} / {totalPersonnel}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  margin-top: 0.4rem;
`;

const Content = styled.span`
  ${({ theme: { colors, fonts } }) => css`
    background-color: ${colors.orange2};
    color: ${colors.white1};
    ${fonts.small}
  `}

  display: inline-block;
  border-radius: 4px;
  padding: 0.2rem 0.5rem;
`;

export default PersonnelStatus;
