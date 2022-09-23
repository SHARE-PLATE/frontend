import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import * as S from '@components/LoginArea/LoginArea.style';
import { loginForServiceMention } from '@constants/mentions';
import { LOGIN_SIGNUP } from '@constants/words';
import { portalState } from '@store/portal';
import { isLoginState } from '@store/user';

const LoginArea = () => {
  const setPortalState = useSetRecoilState(portalState);
  const { state, contents } = useRecoilValueLoadable(isLoginState);
  const isLogin = state === 'hasValue' && contents;

  return (
    <S.Wrapper isLogin={isLogin}>
      <S.MentionWrapper>{loginForServiceMention}</S.MentionWrapper>
      <S.LoginButton onClick={() => setPortalState('login')}>{LOGIN_SIGNUP}</S.LoginButton>
    </S.Wrapper>
  );
};

export default LoginArea;
