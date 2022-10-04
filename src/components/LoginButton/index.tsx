import { useSetRecoilState } from 'recoil';

import * as S from '@components/LoginButton/LoginButton.style';
import { loginMention, kakaoLoginMention } from '@constants/mentions';
import { LOGIN } from '@constants/words';
import Portal from '@portals/Portal';
import { PortalNameType, portalState } from '@store/portal';

const portalName: PortalNameType = 'login';

const LoginButton = () => {
  const setPortal = useSetRecoilState(portalState);

  return (
    <button onClick={() => setPortal(portalName)}>
      {LOGIN}
      <Portal portalName={portalName} type='modal'>
        <S.LoginWrapper>
          {loginMention}
          <S.KakaoLoginButton>{kakaoLoginMention}</S.KakaoLoginButton>
        </S.LoginWrapper>
      </Portal>
    </button>
  );
};

export default LoginButton;
