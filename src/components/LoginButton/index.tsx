import { useRecoilState } from 'recoil';

import Portal from '@components/Portal';
import { loginMention, kakaoLoginMention } from '@constants/mentions';
import { LOGIN } from '@constants/words';
import { portalState } from '@store/portal';

import * as S from './LoginButton.style';

const portalType = 'modal';

const LoginButton = () => {
  const [portal, setPortal] = useRecoilState(portalState);

  return (
    <button onClick={() => setPortal(portalType)}>
      {LOGIN}
      <Portal setPortal={setPortal} isPortal={portal === portalType} type={portalType}>
        <S.LoginWrapper>
          {loginMention}
          <S.KakaoLoginButton>{kakaoLoginMention}</S.KakaoLoginButton>
        </S.LoginWrapper>
      </Portal>
    </button>
  );
};

export default LoginButton;
