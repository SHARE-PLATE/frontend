import { useRef } from 'react';

import FileRegistrationFailedModal from '@components/FileRegistrationFailedModal.tsx';
import * as S from '@components/ShareForm/ShareForm.style';
import Icon from '@components/common/Icon';
import useModal from '@hooks/useModal';

interface FileContainerPropsType {
  fileImage: FileList | undefined;
  setFileImage: React.Dispatch<React.SetStateAction<FileList | undefined>>;
}

const FileContainer = ({ fileImage, setFileImage }: FileContainerPropsType) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const [isModalOpen, setIsModalOpen] = useModal({ modalRef });
  const closeModal = () => setIsModalOpen(false);

  const changeValues = ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
    if (files) {
      if (files.length <= 5) setFileImage(files);
      else {
        setIsModalOpen(true);
        setFileImage(undefined);
      }
    }
  };

  return (
    <S.FileContainer>
      <S.FileLabel htmlFor='input-file'>
        <Icon iconName='Camera' />
        <p>{fileImage ? fileImage.length : 0} / 5</p>
      </S.FileLabel>
      <S.FileForm type='file' id='input-file' accept='image/*' onChange={changeValues} multiple />
      {isModalOpen && <FileRegistrationFailedModal modalRef={modalRef} closeAModal={closeModal} />}
    </S.FileContainer>
  );
};

export default FileContainer;
