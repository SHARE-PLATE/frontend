import styled from 'styled-components';

import Address from '@components/Address';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
import { flexBetween } from '@styles/mixin';

const Header = () => {
  return (
    <Wrapper>
      <div>
        <Icon iconName={ICON_NAME.LOGO} iconSize={ICON_SIZE.LARGE} />
      </div>
      <div>
        <Address />
      </div>
      <div>
        <Icon iconName={ICON_NAME.NOTICE} iconSize={ICON_SIZE.LARGE} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${flexBetween}
  height: 40px;
`;

export default Header;
