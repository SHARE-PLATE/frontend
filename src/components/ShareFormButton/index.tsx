import { useNavigate, useLocation } from 'react-router-dom';

import { Wrapper } from '@components/ShareFormButton/ShareFormButton.style';
import Icon from '@components/common/Icon';

const shareFormLink = '/share-form';

const ShareFormButton = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isShareForm = pathname === shareFormLink;

  return (
    <Wrapper onClick={() => navigate(shareFormLink)} isShareForm={isShareForm}>
      <Icon iconName='Form' iconSize='MEDIUM' />
    </Wrapper>
  );
};

export default ShareFormButton;
