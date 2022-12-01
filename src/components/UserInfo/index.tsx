import { useNavigate } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';

import Loading from '@components/Loading';
import * as S from '@components/UserInfo/UserInfo.style';
import Icon from '@components/common/Icon';
import ImgContainer from '@components/common/ImgContainer';
import { failToGetInfo } from '@constants/mentions';
import { pathName } from '@constants/pathName';
import { userInfoState } from '@store/userInfo';

interface UserInfoPropsType {
  textColor: string;
  arrowIcon?: boolean;
}

const UserInfo = ({ textColor, arrowIcon = true }: UserInfoPropsType) => {
  const navigate = useNavigate();
  const { state, contents } = useRecoilValueLoadable(userInfoState);

  const getContents = () => {
    switch (state) {
      case 'loading':
        return <Loading color={arrowIcon ? 'white0' : 'pink0'} size={30} border={3} />;
      case 'hasValue':
        if (!contents)
          return <S.NoInfoWrapper arrowIcon={arrowIcon}>{failToGetInfo}</S.NoInfoWrapper>;
        const { profileImageUrl, nickname, email } = contents;
        return (
          <>
            <S.InfoContainer>
              <S.ImgWrapper isSet={!!profileImageUrl}>
                {profileImageUrl && (
                  <ImgContainer
                    imgSrc={profileImageUrl}
                    imgTitle='userImage'
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
                <Icon
                  iconName='RightArrow'
                  iconSize={1}
                  handleClick={() => navigate(pathName.profileSetting)}
                />
              </S.IconWrapper>
            )}
          </>
        );
      case 'hasError':
        return <S.NoInfoWrapper arrowIcon={arrowIcon}>{failToGetInfo}</S.NoInfoWrapper>;
    }
  };

  return <S.Wrapper>{getContents()}</S.Wrapper>;
};

export default UserInfo;
