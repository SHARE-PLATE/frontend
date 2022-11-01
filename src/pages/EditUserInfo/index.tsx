import { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { editUserInfoData } from '@api/account';
import basicProfileURL from '@assets/img/profileBase.png';
import EditUserInfoForm from '@components/EditUserInfoForm';
import EditUserInfoHeader from '@components/EditUserInfoHeader';
import {
  failedToChangeUserInfo,
  preventCharacterMention,
  successToChangeUserInfo,
} from '@constants/mentions';
import { pathName } from '@constants/pathName';
import { DELETE_PROFILE_PICTURE, SELECT_ALBUM } from '@constants/words';
import useInput from '@hooks/useInput';
import * as S from '@pages/EditUserInfo/EditUserInfo.style';
import { bottomMessageState } from '@store/bottomMessage';
import { toastModalInfoState } from '@store/modal';
import { userInfoAtom } from '@store/userInfo';
import checkCharacter from '@utils/checkcharacter';
import { convertURLtoFile } from '@utils/convertURLtoFile';

const EditUserInfo = () => {
  const navigate = useNavigate();
  const prevUserInfo = useRecoilValue(userInfoAtom);
  const setToastModalInfo = useSetRecoilState(toastModalInfoState);
  const setBottomMessage = useSetRecoilState(bottomMessageState);
  const [fileImage, setFileImage] = useState<File | null>(null);
  const inputFormBtnRef = useRef<HTMLInputElement>(null);
  const nicknameInput = useInput(prevUserInfo.nickname || '');

  const backToSetting = () => navigate(pathName.profileSetting);

  const changeImage = async (event?: React.ChangeEvent<HTMLInputElement>) => {
    if (event) {
      const { files } = event.target;
      files && setFileImage(files[0]);
    } else {
      const basicProfileImage = await convertURLtoFile(basicProfileURL);
      setFileImage(basicProfileImage);
    }
  };

  const handleClickSubmit = async () => {
    const formData = new FormData();
    const { inputValue: nickname } = nicknameInput;
    const isCharacter = checkCharacter(nickname);
    if (isCharacter) {
      setBottomMessage(({ trigger }) => ({
        trigger: trigger + 1,
        message: preventCharacterMention,
      }));
      return;
    }

    fileImage && formData.append('image', fileImage);
    !!nickname.length && formData.append('nickname', nickname);

    const isSuccessFetch = await editUserInfoData(formData);
    setBottomMessage(({ trigger }) => ({
      trigger: trigger + 1,
      message: isSuccessFetch ? successToChangeUserInfo : failedToChangeUserInfo,
    }));
    backToSetting();
  };

  const showToastModal = () => {
    setToastModalInfo(({ trigger }) => ({
      trigger: trigger + 1,
      mainButtonTitle: DELETE_PROFILE_PICTURE,
      optionButtonTitle: SELECT_ALBUM,
      mainButtonHandler: () => changeImage(),
      optionButtonHandler: () => inputFormBtnRef.current?.click(),
    }));
  };

  useEffect(() => {
    const isUserInfo = !!Object.keys(prevUserInfo).length;
    if (!isUserInfo) backToSetting();
  }, []);

  return (
    <S.Wrapper>
      <EditUserInfoHeader onClickSubmitButton={handleClickSubmit} />
      <EditUserInfoForm
        prevNickname={prevUserInfo.nickname || ''}
        prevImageUrl={prevUserInfo.profileImageUrl || ''}
        fileImage={fileImage}
        onClickImageButton={showToastModal}
        nicknameInput={nicknameInput}
      />
      <S.ImageInput
        type='file'
        id='input-file'
        accept='image/*'
        onChange={changeImage}
        ref={inputFormBtnRef}
      />
    </S.Wrapper>
  );
};

export default EditUserInfo;
