import { Link, useLocation } from 'react-router-dom';

import { Wrapper } from '@components/ShareFormButton/ShareFormButton.style';
import Icon from '@components/common/Icon';

const shareFormLink = '/share-form';

const ShareFormButton = () => {
  const { pathname } = useLocation();

  return (
    <Link to={shareFormLink}>
      {pathname !== shareFormLink && (
        <Wrapper>
          <Icon iconName='Form' iconSize='MEDIUM' />
        </Wrapper>
      )}
    </Link>
  );
};

export default ShareFormButton;
