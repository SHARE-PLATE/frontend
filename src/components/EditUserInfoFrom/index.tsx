import { useRecoilState } from 'recoil';

import * as S from '@components/EditUserInfoFrom/EditUserInfoFrom.style';
import Icon from '@components/common/Icon';
import ImgContainer from '@components/common/ImgContainer';
import InputForm from '@components/common/InputForm';
import useInput from '@hooks/useInput';
import { userInfoAtom } from '@store/userInfo';

const EditUserInfoFrom = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const { profileImageUrl, nickname } = userInfo;
  const nicknameInput = useInput(nickname || '');

  return (
    <S.FormWrapper>
      <S.ImgWrapper isSet={!!profileImageUrl}>
        {profileImageUrl && (
          <ImgContainer
            imgSrc={profileImageUrl}
            imgTitle={'userImage'}
            imgWrapperRatio={1 / 1}
            imgWrapperWidth='5.375rem'
            borderRadius='10rem'
          />
        )}
        <S.IconBackground>
          <Icon iconName='Camera' iconSize={1.5} />
        </S.IconBackground>
      </S.ImgWrapper>
      <S.NickNameWrapper>
        <S.NickNameTitle>닉네임</S.NickNameTitle>
        <InputForm type='text' {...nicknameInput} pla />
      </S.NickNameWrapper>
    </S.FormWrapper>
  );
};

export default EditUserInfoFrom;
