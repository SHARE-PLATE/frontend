import styled from 'styled-components';

import Address from '@components/Address';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
import { flexBetween } from '@styles/mixin';

const ShareListHeader = () => {
  return (
    <Wrapper>
      <div>
        <Address />
      </div>
      <div>
        <Icon iconName={ICON_NAME.NOTICE} iconSize={ICON_SIZE.LARGE} />
        <span>내 주변</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${flexBetween}
  padding-bottom: 12px;
  border-bottom: 1px solid #000;
`;

export default ShareListHeader;
