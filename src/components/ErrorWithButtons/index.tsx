import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import * as S from '@components/ErrorWithButtons/ErrorWithButtons.style';
import Loading from '@components/Loading';
import Icon from '@components/common/Icon';
import { BACK, HOME, LOGIN } from '@constants/words';
import { isNavigationState } from '@store/navigation';
import { portalState } from '@store/portal';

type ErrorWithButtonsPropsType = {
  isLoading?: boolean;
  mention?: string;
  buttonType?: 'login' | 'back';
};

const ErrorWithButtons = ({ isLoading, mention, buttonType }: ErrorWithButtonsPropsType) => {
  const navigate = useNavigate();
  const setPortal = useSetRecoilState(portalState);
  const setIsNavigation = useSetRecoilState(isNavigationState);
  const isLoginButton = buttonType === 'login';

  setIsNavigation(false);

  useEffect(() => {
    return () => setIsNavigation(true);
  }, []);

  return (
    <S.Wrapper>
      <S.IconsWrapper>
        <Icon iconName='Logo' iconSize={2} />
        <Icon iconName='SharePlate' iconSize={11.5} />
      </S.IconsWrapper>
      {isLoading && <Loading color='orange2' size={42} border={6} />}
      {!isLoading && (
        <>
          {mention && <S.Mention>{mention}</S.Mention>}
          <S.ButtonsWrapper>
            <S.Button onClick={() => navigate('/')}>{HOME}</S.Button>
            {isLoginButton ? (
              <S.Button onClick={() => setPortal('login')}>{LOGIN}</S.Button>
            ) : (
              <S.Button onClick={() => navigate(-1)}>{BACK}</S.Button>
            )}
          </S.ButtonsWrapper>
        </>
      )}
    </S.Wrapper>
  );
};

export default ErrorWithButtons;
