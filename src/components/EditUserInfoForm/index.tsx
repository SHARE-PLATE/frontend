import * as S from '@components/EditUserInfoForm/EditUserInfoForm.style';
import Icon from '@components/common/Icon';
import ImgContainer from '@components/common/ImgContainer';
import InputForm from '@components/common/InputForm';
import { NICKNAME } from '@constants/words';
import { UseInputReturnType } from '@hooks/useInput';

interface EditUserInfoFromPropsType {
  fileImage: File | null;
  openToastModal: () => void;
  prevNickname: string;
  prevImageUrl: string;
  nicknameInput: UseInputReturnType;
}

const nicknameMaxLength = 13;

const EditUserInfoForm = ({
  fileImage,
  openToastModal,
  prevImageUrl,
  prevNickname,
  nicknameInput,
}: EditUserInfoFromPropsType) => {
  const profileImageUrl = fileImage ? URL.createObjectURL(fileImage) : prevImageUrl;

  return (
    <S.FormWrapper>
      <S.ImgWrapper isSet={!!profileImageUrl}>
        {profileImageUrl && (
          <ImgContainer
            imgSrc={profileImageUrl}
            imgTitle='userImage'
            imgWrapperRatio={1 / 1}
            imgWrapperWidth='5.375rem'
            borderRadius='10rem'
          />
        )}
        <S.IconBackground>
          <Icon iconName='EditingCamera' iconSize={1.44} handleClick={openToastModal} />
        </S.IconBackground>
      </S.ImgWrapper>
      <S.NickNameWrapper>
        <S.NickNameTitle>{NICKNAME}</S.NickNameTitle>
        <InputForm
          type='text'
          {...nicknameInput}
          placeholder={prevNickname}
          maxLength={nicknameMaxLength}
        />
      </S.NickNameWrapper>
    </S.FormWrapper>
  );
};

export default EditUserInfoForm;
