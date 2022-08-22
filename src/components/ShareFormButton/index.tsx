import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import * as S from '@components/ShareFormButton/ShareFormButton.style';
import Icon from '@components/common/Icon';
import useCheckPathname from '@hooks/useCheckPathname';

const ShareFormButton = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const isShareFormOrProfile = useCheckPathname({ targetPaths: ['shareForm', 'profile'] });
  const showMenuBar = () => setIsOpen(!isOpen);

  return (
    <S.Wrapper onClick={showMenuBar} isShareFormOrProfile={isShareFormOrProfile}>
      {isOpen ? (
        <>
          <span>토글</span>
          <S.DeliveryButton onClick={() => navigate('/share-registration/delivery')}>
            <span>배달쉐어</span>
          </S.DeliveryButton>
          <S.IngredientButton onClick={() => navigate('/share-registration/ingredient')}>
            <span>재료쉐어</span>
          </S.IngredientButton>
        </>
      ) : (
        <button>
          <Icon iconName='Form' />
        </button>
      )}
    </S.Wrapper>
  );
};

export default ShareFormButton;
