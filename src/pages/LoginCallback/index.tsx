import { useEffect, useState } from 'react';

import { useSearchParams, useNavigate } from 'react-router-dom';

import { useLogin } from '@api/account';
import HomeLogin from '@components/HomeLogin';
import { loginFailedMention } from '@constants/mentions';
import { CODE } from '@constants/words';

const LoginCallback = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get(CODE);
  const login = useLogin(code);

  const checkCode = async () => {
    const isLogin = await login();

    if (!isLogin) {
      setIsLoading(false);
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    checkCode();
  }, []);

  return <HomeLogin isLoading={isLoading} mention={loginFailedMention} />;
};

export default LoginCallback;
