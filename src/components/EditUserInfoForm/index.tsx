import * as S from '@components/EditUserInfoForm/EditUserInfoForm.style';
import Icon from '@components/common/Icon';
import ImgContainer from '@components/common/ImgContainer';
import InputForm from '@components/common/InputForm';
import { NICKNAME } from '@constants/words';
import { UseInputReturnType } from '@hooks/useInput';

interface EditUserInfoFromPropsType {
  fileImage: File | null;
  onClickImageButton: () => void;
  prevNickname: string;
  prevImageUrl: string;
  nicknameInput: UseInputReturnType;
}

const nicknameMaxLength = 13;

const EditUserInfoForm = ({
  fileImage,
  onClickImageButton,
  prevImageUrl,
  prevNickname,
  nicknameInput,
}: EditUserInfoFromPropsType) => {
  const profileImageUrl = fileImage ? URL.createObjectURL(fileImage) : prevImageUrl;

  return (
    <S.FormWrapper>
      <S.ImgWrapper isSet={!!profileImageUrl} onClick={onClickImageButton}>
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
          <Icon iconName='EditingCamera' iconSize={1.44} />
        </S.IconBackground>
      </S.ImgWrapper>
      <S.NickNameWrapper>
        <S.NickNameTitle>{NICKNAME}</S.NickNameTitle>
        <InputForm
          type='text'
          placeholder={prevNickname}
          maxLength={nicknameMaxLength}
          {...nicknameInput}
        />
      </S.NickNameWrapper>
    </S.FormWrapper>
  );
};

export default EditUserInfoForm;
