import styled from 'styled-components';

import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
import { userInfoExample } from '@data/userInfo';
import { flexBetween } from '@styles/mixin';

const UserInfo = () => {
  const userInfo = userInfoExample;

  return (
    <Wrapper>
      <InfoContainer>
        <Image src={userInfo.profileImageUrl} alt='유저 이미지' />
        <A>
          <Nickname>{userInfo.nickname}</Nickname>
          <Email>{userInfo.email}</Email>
        </A>
      </InfoContainer>
      <IconContainer>
        <Icon iconName={ICON_NAME.RIGHT_ARROW} iconSize={ICON_SIZE.LARGE} />
      </IconContainer>
    </Wrapper>
  );
};

const A = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 10px;
`;

const Wrapper = styled.div`
  /* position: relative; */
  ${flexBetween}
  margin-left: 20px;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  float: left;
  margin-right: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
`;

const Nickname = styled.h2`
  font-weight: bold;
`;

const Email = styled.span`
  font-size: 12px;
`;

const IconContainer = styled.div`
  /* position: absolute;
  top: 18px;
  right: 10px; */
`;

export default UserInfo;
