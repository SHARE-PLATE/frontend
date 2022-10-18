import { useEffect } from 'react';

import { UserInfoDataType } from '@api/account';
import * as S from '@components/EditUserInfoFrom/EditUserInfoFrom.style';
import Icon from '@components/common/Icon';
import ImgContainer from '@components/common/ImgContainer';
import InputForm from '@components/common/InputForm';
import useInput from '@hooks/useInput';

interface EditUserInfoFromPropsType {
  editUserInfo: UserInfoDataType;
  fileImage: FileList | undefined;
  setEditUserInfo: React.Dispatch<React.SetStateAction<UserInfoDataType>>;
  openToastModal: () => void;
}

const EditUserInfoFrom = ({
  editUserInfo,
  fileImage,
  setEditUserInfo,
  openToastModal,
}: EditUserInfoFromPropsType) => {
  const profileImageUrl = fileImage
    ? URL.createObjectURL(fileImage[0])
    : editUserInfo.profileImageUrl;
  const nicknameInput = useInput(editUserInfo.nickname || '');

  useEffect(() => {
    setEditUserInfo((prev) => ({ ...prev, nickname: nicknameInput.inputValue }));
  }, [nicknameInput.inputValue]);
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
          <Icon iconName='Camera' iconSize={1.5} handleClick={openToastModal} />
        </S.IconBackground>
      </S.ImgWrapper>
      <S.NickNameWrapper>
        <S.NickNameTitle>닉네임</S.NickNameTitle>
        <InputForm type='text' {...nicknameInput} />
      </S.NickNameWrapper>
    </S.FormWrapper>
  );
};

export default EditUserInfoFrom;
