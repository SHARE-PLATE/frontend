import { useRef } from 'react';

import { v4 as getRandomKey } from 'uuid';

import * as S from '@components/ShareForm/Option/ShareForm.style';
import FailedModal from '@components/common/FailedModal';
import Icon from '@components/common/Icon';
import { fileFailed } from '@constants/mentions';
import useModal from '@hooks/useModal';

interface FileContainerPropsType {
  fileImage: FileList | undefined;
  setFileImage: React.Dispatch<React.SetStateAction<FileList | undefined>>;
}

const FileContainer = ({ fileImage, setFileImage }: FileContainerPropsType) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const [isFailedModal, setFailedModal] = useModal({ modalRef });
  const closeModal = () => setFailedModal(false);

  const changeValues = ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
    if (files) {
      if (files.length <= 5) setFileImage(files);
      else {
        setFailedModal(true);
        setFileImage(undefined);
      }
    }
  };

  const deleteImage = (clickedImage: File) => {
    const dataTransfer = new DataTransfer();
    if (fileImage) {
      Array.from(fileImage)
        .filter((file) => file !== clickedImage)
        .forEach((file) => {
          dataTransfer.items.add(file);
        });

      setFileImage(dataTransfer.files);
    }
  };

  return (
    <S.FileWrapper>
      <S.FileLabel htmlFor='input-file'>
        {fileImage?.length ? (
          <Icon iconName='CameraActive' iconSize={2} />
        ) : (
          <Icon iconName='Camera' iconSize={2} />
        )}
        <S.FileCount>
          <S.FileLength isFile={fileImage?.length}>{fileImage ? fileImage.length : 0}</S.FileLength>
          <span>/5</span>
        </S.FileCount>
      </S.FileLabel>
      <S.FileForm type='file' id='input-file' accept='image/*' onChange={changeValues} multiple />

      {fileImage &&
        [...fileImage].map((file) => (
          <S.ImagePreviewContainer key={getRandomKey()}>
            <S.ImagePreview src={URL.createObjectURL(file)} />
            <Icon iconName='ImgDelete' handleClick={() => deleteImage(file)} />
          </S.ImagePreviewContainer>
        ))}
      {isFailedModal && (
        <FailedModal modalRef={modalRef} closeModal={closeModal} text={fileFailed} />
      )}
    </S.FileWrapper>
  );
};

export default FileContainer;
