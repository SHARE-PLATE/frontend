import * as S from '@components/UserInfo/UserInfo.style';
import Icon from '@components/common/Icon';
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
      <S.IconWrapper>
        <Icon iconName='RightArrow' iconSize='LARGE' />
      </S.IconWrapper>
    </S.Wrapper>
  );
};

export default UserInfo;
