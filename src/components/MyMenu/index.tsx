import styled from 'styled-components';

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
  ${flexBetween}
  margin: 30px 20px;
`;

const Menu = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 33%;
  padding: 12px;

  ::after {
    content: '|';
    position: absolute;
    left: 94px;
    top: 30px;
  }

  :last-child::after {
    content: '';
  }

  svg {
    margin: 0px auto;
    margin-bottom: 8px;
  }

  p {
    font-weight: bold;
  }
`;

export default MyMenu;
