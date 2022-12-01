import { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { editUserInfoData, UserInfoDataType } from '@api/account';
import basicProfileURL from '@assets/img/profileBase.png';
import * as S from '@components/EditUserInfoContents/EditUserInfoContents.style';
import EditUserInfoForm from '@components/EditUserInfoForm';
import EditUserInfoHeader from '@components/EditUserInfoHeader';
import ToastModal from '@components/ToastModal';
import {
  failedToChangeUserInfo,
  notToUseSpecialCharMention,
  successToChangeUserInfo,
} from '@constants/mentions';
import { pathName } from '@constants/pathName';
import { DELETE_PROFILE_PICTURE, SELECT_ALBUM } from '@constants/words';
import useInput from '@hooks/useInput';
import useModal from '@hooks/useModal';
import { bottomMessageState } from '@store/bottomMessage';
import checkCharacter from '@utils/checkcharacter';
import { getFileFromURL } from '@utils/getFileFromURL';

const EditUserInfoContents = ({ prevUserInfo }: { prevUserInfo: UserInfoDataType }) => {
  if (!prevUserInfo) return <></>;

  const navigate = useNavigate();
  const setBottomMessage = useSetRecoilState(bottomMessageState);
  const [fileImage, setFileImage] = useState<File | null>(null);
  const inputFormBtnRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isToastModal, setToastModal] = useModal({ modalRef });
  const nicknameInput = useInput(prevUserInfo.nickname || '');

  const backToSetting = () => navigate(pathName.profileSetting);

  const changeImage = async (event?: React.ChangeEvent<HTMLInputElement>) => {
    if (event) {
      const { files } = event.target;
      files && setFileImage(files[0]);
    } else {
      const basicProfileImage = await getFileFromURL(basicProfileURL);
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
        message: notToUseSpecialCharMention,
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
        openToastModal={() => setToastModal(true)}
        nicknameInput={nicknameInput}
      />
      <S.ImageInput
        type='file'
        id='input-file'
        accept='image/*'
        onChange={changeImage}
        ref={inputFormBtnRef}
      />

      {isToastModal && (
        <ToastModal
          modalRef={modalRef}
          onClickCloseButton={() => setToastModal(false)}
          mainButtonTitle={DELETE_PROFILE_PICTURE}
          optionButtonTitle={SELECT_ALBUM}
          mainButtonHandler={() => {
            setToastModal(false);
            changeImage();
          }}
          optionButtonHandler={() => {
            setToastModal(false);
            inputFormBtnRef.current?.click();
          }}
        />
      )}
    </S.Wrapper>
  );
};

export default EditUserInfoContents;
