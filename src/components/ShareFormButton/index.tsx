import { Link } from 'react-router-dom';

import { Wrapper } from '@components/ShareFormButton/ShareFormButton.style';
import Icon from '@components/common/Icon';

const ShareFormButton = () => {
  return (
    <Link to='share-form'>
      <Wrapper>
        <Icon iconName='Form' iconSize='MEDIUM' />
      </Wrapper>
    </Link>
  );
};

export default ShareFormButton;
