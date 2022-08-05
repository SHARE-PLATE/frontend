import styled, { css } from 'styled-components';

import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
import { flexBetween } from '@styles/mixin';

const MyMenu = () => {
  return (
    <Wrapper>
      <Menu>
        <Icon iconName={ICON_NAME.SALES_HISTORY} iconSize={ICON_SIZE.LARGE} />
        <p>판매내역</p>
      </Menu>
      <Menu>
        <Icon iconName={ICON_NAME.PURCHASE_HISTORY} iconSize={ICON_SIZE.LARGE} />
        <p>구매내역</p>
      </Menu>
      <Menu>
        <Icon iconName={ICON_NAME.HEART} iconSize={ICON_SIZE.LARGE} />
        <p>찜한 리스트</p>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  padding-top: 1rem;
  ${flexBetween};
`;

const Menu = styled.li`
  ${({ theme: { fonts } }) => css`
    ${fonts.small};
  `}
  display: flex;
  flex-direction: column;
  position: relative;
  width: 33%;
  padding: 1rem;

  ::after {
    content: '|';
    position: absolute;
    right: 0;
    top: 50%;
  }

  :last-child::after {
    content: '';
  }

  svg {
    margin: 0px auto;
    margin-bottom: 8px;
  }

  p {
    text-align: center;
    font-weight: bold;
  }
`;

export default MyMenu;
