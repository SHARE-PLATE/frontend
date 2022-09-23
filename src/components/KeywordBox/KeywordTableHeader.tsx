import { Dispatch } from 'react';

import * as S from '@components/KeywordBox/KeywordBox.style';
import Icon from '@components/common/Icon';

interface KeywordTableHeaderPropsType {
  location: string;
  openModal: () => void;
  setClickedLocation: Dispatch<React.SetStateAction<string>>;
}

const KeywordTableHeader = ({
  location,
  openModal,
  setClickedLocation,
}: KeywordTableHeaderPropsType) => {
  const deleteClickHandler = () => {
    setClickedLocation(location);
    openModal();
  };

  return (
    <S.Header>
      <S.Title>{location}</S.Title>
      <Icon iconName='DeleteCircle' handleClick={deleteClickHandler} />
    </S.Header>
  );
};

export default KeywordTableHeader;
