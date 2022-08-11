import { useNavigate, useLocation } from 'react-router-dom';

import { Wrapper } from '@components/ShareFormButton/ShareFormButton.style';
import Icon from '@components/common/Icon';
import { pathName } from '@constants/pathName';

const { shareForm, profile } = pathName;

const ShareFormButton = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isShareForm = pathname === '/' + shareForm || pathname === '/' + profile;

  return (
    <Wrapper onClick={() => navigate(shareForm)} isShareForm={isShareForm}>
      <Icon iconName='Form' iconSize='MEDIUM' />
    </Wrapper>
  );
};

export default ShareFormButton;
