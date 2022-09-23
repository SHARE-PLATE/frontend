import { useState } from 'react';
import { useEffect } from 'react';

import { getUserInfoData, UserInfoDataType } from '@api/account';
import * as S from '@components/UserInfo/UserInfo.style';
import Icon from '@components/common/Icon';
import ImgContainer from '@components/common/ImgContainer';

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfoDataType>({});
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
          <S.Nickname isSet={!!nickname}>{nickname}</S.Nickname>
          <S.Email isSet={!!email}>{email}</S.Email>
        </S.Info>
      </S.InfoContainer>
      <S.IconWrapper>
        <Icon iconName='RightArrow' iconSize='LARGE' />
      </S.IconWrapper>
    </S.Wrapper>
  );
};

export default UserInfo;
