import { Dispatch, MouseEvent } from 'react';

import * as S from '@components/KeywordBox/KeywordBox.style';
import Icon from '@components/common/Icon';

interface KeywordTableHeaderPropsType {
  location: string;
  openModal: (e: MouseEvent) => void;
  setClickedLocation: Dispatch<React.SetStateAction<string>>;
}

const KeywordTableHeader = ({
  location,
  openModal,
  setClickedLocation,
}: KeywordTableHeaderPropsType) => {
  const deleteClickHandler = (e: MouseEvent) => {
    setClickedLocation(location);
    openModal(e);
  };

  return (
    <S.Header>
      <S.Title>{location}</S.Title>
      <Icon iconName='DeleteCircle' handleClick={(e) => deleteClickHandler(e)} />
    </S.Header>
  );
};

export default KeywordTableHeader;
