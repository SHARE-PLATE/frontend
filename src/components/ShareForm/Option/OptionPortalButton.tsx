import { useRecoilValue, useSetRecoilState } from 'recoil';

import { OptionBtn } from '@pages/ShareRegistration/ShareRegistration.style';
import { portalState } from '@store/portal';
import { isSelectedOption } from '@store/shareRegistration';

const OptionPortalButton = () => {
  const setPortal = useSetRecoilState(portalState);
  const isSelectedOptionValue = useRecoilValue(isSelectedOption);

  return (
    <OptionBtn onClick={() => setPortal('option')} isOption={isSelectedOptionValue}>
      <span>옵션선택</span>
    </OptionBtn>
  );
};

export default OptionPortalButton;
