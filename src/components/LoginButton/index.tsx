import { useRecoilState } from 'recoil';

import Portal from '@components/Portal';
import { loginMention, kakaoLoginMention } from '@constants/mentions';
import { LOGIN } from '@constants/words';
import { modalState } from '@store/portal';

import * as S from './LoginButton.style';

const LoginButton = () => {
  const [isPortal, setIsPortal] = useRecoilState(modalState);

  return (
    <button onClick={() => setIsPortal(true)}>
      {LOGIN}
      <Portal setIsPortal={setIsPortal} isPortal={isPortal} type='modal'>
        <S.LoginWrapper>
          {loginMention}
          <S.KakaoLoginButton>{kakaoLoginMention}</S.KakaoLoginButton>
        </S.LoginWrapper>
      </Portal>
    </button>
  );
};

export default LoginButton;
