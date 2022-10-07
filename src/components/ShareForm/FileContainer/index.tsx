import React, { useRef } from 'react';

import { v4 as getRandomKey } from 'uuid';

import * as S from '@components/ShareForm/FileContainer/FileContainer.style';
import FailedModal from '@components/common/FailedModal';
import Icon from '@components/common/Icon';
import ImgContainer from '@components/common/ImgContainer';
import { fileFailed } from '@constants/mentions';
import useModal from '@hooks/useModal';

interface FileContainerPropsType {
  fileImage: FileList | undefined;
  setFileImage: (file: FileList | undefined) => void;
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
      <S.FileLabel htmlFor='input-file' isImage={!!fileImage?.length}>
        <Icon iconName='Camera' iconSize={1.6} />
        <S.FileCount>
          <S.FileLength isFile={fileImage?.length}>{fileImage?.length || 0}</S.FileLength>
          <span>/5</span>
        </S.FileCount>
      </S.FileLabel>
      <S.FileForm type='file' id='input-file' accept='image/*' onChange={changeValues} multiple />

      {fileImage &&
        [...fileImage].map((file) => (
          <S.ImagePreviewContainer key={getRandomKey()}>
            <ImgContainer
              imgSrc={URL.createObjectURL(file)}
              imgTitle={URL.createObjectURL(file)}
              imgWrapperRatio={80 / 72}
              imgWrapperWidth='80px'
              borderRadius='4px'
            />
            <Icon iconName='ImgDelete' handleClick={() => deleteImage(file)} />
          </S.ImagePreviewContainer>
        ))}
      {isFailedModal && (
        <FailedModal modalRef={modalRef} closeModal={closeModal} text={fileFailed} />
      )}
    </S.FileWrapper>
  );
};

export default React.memo(FileContainer);
