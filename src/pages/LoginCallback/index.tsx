import { useEffect, useState } from 'react';

import { useSearchParams, useNavigate } from 'react-router-dom';

import { useLogin, useLogout } from '@api/account';
import Loading from '@components/Loading';
import Icon from '@components/common/Icon';
import { LOGIN_FAILED } from '@constants/mentions';
import { CODE, HOME, LOGIN } from '@constants/words';
import * as S from '@pages/LoginCallback/LoginCallback.style';
import { setLocalStorageInfo } from '@utils/localStorage';

const isTest = true;

const LoginCallback = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get(CODE);
  const login = useLogin(code);
  const logout = useLogout();

  const checkCode = async () => {
    const isLogin = await login();

    if (!isLogin) {
      setIsLoading(false);
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    if (isTest) {
      window.location.href = `http://localhost:3000/login-callback?code=${code}`;
      return;
    }

    setLocalStorageInfo({ key: 'searchRecent', info: code });
    checkCode();
  }, []);

  return (
    <S.Wrapper>
      <S.IconsWrapper>
        <Icon iconName='Logo' iconSize='LARGE' />
        <Icon iconName='SharePlate' iconSize={10} />
      </S.IconsWrapper>
      {isLoading && <Loading color='orange2' size={42} border={6} />}
      {!isLoading && (
        <S.LoginFailed>
          {LOGIN_FAILED}
          <S.ButtonsWrapper>
            <S.Button onClick={() => navigate('/')}>{HOME}</S.Button>
            <S.Button onClick={() => logout()}>{LOGIN}</S.Button>
          </S.ButtonsWrapper>
        </S.LoginFailed>
      )}
    </S.Wrapper>
  );
};

export default LoginCallback;
