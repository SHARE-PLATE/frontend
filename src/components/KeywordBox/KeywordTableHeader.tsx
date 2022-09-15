import * as S from '@components/KeywordBox/KeywordBox.style';
import Icon from '@components/common/Icon';

interface KeywordTableHeaderPropsType {
  location: string;
  openModal: () => void;
}

const KeywordTableHeader = ({ location, openModal }: KeywordTableHeaderPropsType) => {
  return (
    <S.Header>
      <S.Title>{location}</S.Title>
      <button onClick={openModal}>
        <Icon iconName='DeleteCircle' iconSize='LARGE' />
      </button>
    </S.Header>
  );
};

export default KeywordTableHeader;
