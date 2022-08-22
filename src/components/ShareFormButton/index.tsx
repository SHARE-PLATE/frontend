import { useState } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import * as S from '@components/ShareFormButton/ShareFormButton.style';
import Icon from '@components/common/Icon';
import { pathName } from '@constants/pathName';

const { shareForm, profile } = pathName;

const ShareFormButton = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isShareForm = pathname === '/' + shareForm || pathname === '/' + profile;
  const showMenuBar = () => setIsOpen(!isOpen);

  return (
    <S.Wrapper onClick={showMenuBar} isShareForm={isShareForm}>
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
