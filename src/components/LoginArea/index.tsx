import { useState } from 'react';
import { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';

import { checkVerification } from '@api/account';
import * as S from '@components/LoginArea/LoginArea.style';
import { loginForServiceMention } from '@constants/mentions';
import { LOGIN_SIGNUP } from '@constants/words';
import { portalState } from '@store/portal';

const LoginArea = () => {
  const setPortalState = useSetRecoilState(portalState);
  const [isLogin, setIsLogin] = useState(false);

  const checkLogin = async () => {
    const status = await checkVerification();
    if (status === 200) setIsLogin(true);
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <S.Wrapper isLogin={isLogin}>
      <S.MentionWrapper>{loginForServiceMention}</S.MentionWrapper>
      <S.LoginButton onClick={() => setPortalState('login')}>{LOGIN_SIGNUP}</S.LoginButton>
    </S.Wrapper>
  );
};

export default LoginArea;
