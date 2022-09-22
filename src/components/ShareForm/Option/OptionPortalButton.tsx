import { useRecoilValue, useSetRecoilState } from 'recoil';

import Button from '@components/common/Button';
import { portalState } from '@store/portal';
import { isSelectedOption } from '@store/shareRegistration';

const OptionPortalButton = () => {
  const setPortal = useSetRecoilState(portalState);

  const isSelectedOptionValue = useRecoilValue(isSelectedOption);

  return (
    <Button size='large' onClick={() => setPortal('option')} active={isSelectedOptionValue}>
      <span>옵션선택</span>
    </Button>
  );
};

export default OptionPortalButton;
