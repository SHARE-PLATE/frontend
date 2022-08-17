import * as S from '@components/ShareForm/ShareForm.style';
import Icon from '@components/common/Icon';

const FileContainer = () => {
  return (
    <S.FileContainer>
      <S.FileLabel htmlFor='input-file'>
        <Icon iconName='Camera' />
        <p>0 / 5</p>
      </S.FileLabel>
      <S.FileForm type='file' id='input-file' accept='image/*' />
    </S.FileContainer>
  );
};

export default FileContainer;
