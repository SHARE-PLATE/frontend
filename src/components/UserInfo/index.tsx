import * as S from '@components/UserInfo/UserInfo.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
import { userInfoExample } from '@data/userInfo';

const UserInfo = () => {
  const userInfo = userInfoExample;

  return (
    <S.Wrapper>
      <S.InfoContainer>
        <S.Image src={userInfo.profileImageUrl} alt='유저 이미지' />
        <S.Info>
          <S.Nickname>{userInfo.nickname}</S.Nickname>
          <S.Email>{userInfo.email}</S.Email>
        </S.Info>
      </S.InfoContainer>
      <S.IconContainer>
        <Icon iconName={ICON_NAME.RIGHT_ARROW} iconSize={ICON_SIZE.LARGE} />
      </S.IconContainer>
    </S.Wrapper>
  );
};

export default UserInfo;
