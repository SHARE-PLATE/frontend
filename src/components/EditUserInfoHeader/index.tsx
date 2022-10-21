import { useNavigate } from 'react-router-dom';

import { editUserInfoData, UserInfoDataType } from '@api/account';
import * as S from '@components/EditUserInfoHeader/EditUserInfoHeader.style';
import Icon from '@components/common/Icon';
import { EDIT_PROFILE, FINISH } from '@constants/words';

interface EditUserInfoHeaderPropsType {
  editUserInfo: UserInfoDataType;
  fileImage: FileList | undefined;
}

const EditUserInfoHeader = ({ editUserInfo, fileImage }: EditUserInfoHeaderPropsType) => {
  const navigate = useNavigate();
  const handleClickGoBack = () => navigate(-1);

  const handleClickSubmit = async () => {
    const formData = new FormData();

    if (fileImage) {
      formData.append('profileImage', fileImage[0]);
    } else if (editUserInfo.profileImageUrl) {
      formData.append('profileImage', JSON.stringify(editUserInfo.profileImageUrl));
    } else {
      formData.append('profileImage', '');
    }

    if (editUserInfo.nickname) {
      formData.append('nickname', editUserInfo.nickname);
    } else {
      formData.append('nickname', '');
    }

    const isSuccessFetch = await editUserInfoData(formData);
    if (isSuccessFetch) {
      handleClickGoBack();
    }
  };
  return (
    <S.HeaderWrapper>
      <S.ButtonWrapper position='left'>
        <Icon iconName='Back' handleClick={handleClickGoBack} />
      </S.ButtonWrapper>
      <S.Title>{EDIT_PROFILE}</S.Title>
      <S.ButtonWrapper position='right'>
        <S.SubmitBtn onClick={handleClickSubmit}>{FINISH}</S.SubmitBtn>
      </S.ButtonWrapper>
    </S.HeaderWrapper>
  );
};

export default EditUserInfoHeader;
