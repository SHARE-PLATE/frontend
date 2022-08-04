import styled from 'styled-components';

import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
import { flexBetween } from '@styles/mixin';

const ProfileHeader = () => {
  return (
    <Wrapper>
      <Title>마이메뉴</Title>
      <Icons>
        <Icon iconName={ICON_NAME.NOTICE_OFF} iconSize={ICON_SIZE.LARGE} />
        <Icon iconName={ICON_NAME.OPTION} iconSize={ICON_SIZE.LARGE} />
      </Icons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${flexBetween}
  height: 52px;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
`;

const Icons = styled.div`
  display: flex;
`;

export default ProfileHeader;
