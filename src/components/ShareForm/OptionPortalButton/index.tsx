import { MouseEvent } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import { SELECT_OPTION } from '@constants/words';
import { OptionBtn } from '@pages/ShareRegistration/ShareRegistration.style';
import { portalState } from '@store/portal';
import { isSelectedOptionState } from '@store/shareRegistration';

const OptionPortalButton = () => {
  const setPortal = useSetRecoilState(portalState);
  const isSelectedOptionStateValue = useRecoilValue(isSelectedOptionState);

  const handleClickButton = (event: MouseEvent) => {
    event.preventDefault();
    setPortal('option');
  };

  return (
    <OptionBtn onClick={handleClickButton} isOption={isSelectedOptionStateValue}>
      <span>{SELECT_OPTION}</span>
    </OptionBtn>
  );
};

export default OptionPortalButton;
