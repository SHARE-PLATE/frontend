import { useRef } from 'react';

import FileRegistrationFailedModal from '@components/FileRegistrationFailedModal';
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
      <S.FileLabel htmlFor='input-file' isFile={fileImage?.length}>
        <Icon iconName='Camera' />
        <div>
          <S.FileLength isFile={fileImage?.length}>{fileImage ? fileImage.length : 0}</S.FileLength>
          <span>/5</span>
        </div>
      </S.FileLabel>
      <S.FileForm type='file' id='input-file' accept='image/*' onChange={changeValues} multiple />
      {isModalOpen && <FileRegistrationFailedModal modalRef={modalRef} closeAModal={closeModal} />}

      {fileImage &&
        [...fileImage].map((file, idx) => (
          <S.ImagePreviewContainer key={idx}>
            <S.ImagePreview src={URL.createObjectURL(file)} />
            <Icon iconName='ImgDelete' handleClick={() => deleteImage(file)} />
          </S.ImagePreviewContainer>
        ))}
    </S.FileWrapper>
  );
};

export default FileContainer;
