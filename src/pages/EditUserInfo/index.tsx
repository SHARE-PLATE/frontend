import { useState, useRef } from 'react';

import { useRecoilValue } from 'recoil';

import { UserInfoDataType } from '@api/account';
import EditUserInfoForm from '@components/EditUserInfoForm';
import EditUserInfoHeader from '@components/EditUserInfoHeader';
import ToastModal from '@components/ToastModal';
import { DELETE_PROFILE_PICTURE, SELECT_ALBUM } from '@constants/words';
import useModal from '@hooks/useModal';
import * as S from '@pages/EditUserInfo/EditUserInfo.style';
import { userInfoAtom } from '@store/userInfo';

const EditUserInfo = () => {
  const inputFormBtnRef = useRef<HTMLInputElement>(null);

  const userInfo = useRecoilValue(userInfoAtom);
  const [editUserInfo, setEditUserInfo] = useState<UserInfoDataType>(userInfo);

  const modalRef = useRef<HTMLDivElement>(null);
  const [isToastModal, setToastModal] = useModal({ modalRef });

  const [fileImage, setFileImage] = useState<FileList>();

  const changeValues = ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
    if (files) setFileImage(files);
  };

  return (
    <S.Wrapper>
      <EditUserInfoHeader editUserInfo={editUserInfo} fileImage={fileImage} />
      <EditUserInfoForm
        editUserInfo={editUserInfo}
        fileImage={fileImage}
        setEditUserInfo={setEditUserInfo}
        openToastModal={() => {
          setToastModal(true);
        }}
      />
      <S.FileForm
        type='file'
        id='input-file'
        accept='image/*'
        onChange={changeValues}
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
            setEditUserInfo((prev) => ({ ...prev, profileImageUrl: undefined }));
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

export default EditUserInfo;
