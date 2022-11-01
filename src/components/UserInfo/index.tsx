import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { getUserInfoData } from '@api/account';
import * as S from '@components/UserInfo/UserInfo.style';
import Icon from '@components/common/Icon';
import ImgContainer from '@components/common/ImgContainer';
import { userInfoAtom } from '@store/userInfo';

interface UserInfoPropsType {
  textColor: string;
  arrowIcon?: boolean;
}

const UserInfo = ({ textColor, arrowIcon = true }: UserInfoPropsType) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

  const { profileImageUrl, nickname, email } = userInfo;

  const getUserInfo = async () => {
    const userInfoData = await getUserInfoData();
    if (userInfoData) setUserInfo(userInfoData);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <S.Wrapper>
      <S.InfoContainer>
        <S.ImgWrapper isSet={!!profileImageUrl}>
          {profileImageUrl && (
            <ImgContainer
              imgSrc={profileImageUrl}
              imgTitle={'userImage'}
              imgWrapperRatio={1 / 1}
              imgWrapperWidth='3.5rem'
              borderRadius='10rem'
            />
          )}
        </S.ImgWrapper>
        <S.Info>
          <S.Nickname isSet={!!nickname} textColor={textColor}>
            {nickname}
          </S.Nickname>
          <S.Email isSet={!!email} textColor={textColor}>
            {email}
          </S.Email>
        </S.Info>
      </S.InfoContainer>
      {arrowIcon && (
        <S.IconWrapper>
          <Icon iconName='RightArrow' iconSize={1} handleClick={() => navigate('./setting')} />
        </S.IconWrapper>
      )}
    </S.Wrapper>
  );
};

export default UserInfo;
