import { useRef } from 'react';

import * as S from '@components/Login/Login.style';
import Portal from '@components/Portal';
import Icon from '@components/common/Icon';
import { loginMention, kakaoLoginMention } from '@constants/mentions';
import { PortalNameType } from '@store/portal';

const portalName: PortalNameType = 'login';

const Login = () => {
  const closeBtn = useRef<HTMLButtonElement>(null);

  return (
    <Portal portalName={portalName} type='full' closeBtn={closeBtn}>
      <S.LoginWrapper>
        <S.CloseBtn ref={closeBtn}>
          <Icon iconName='Back' iconSize='MEDIUM' />
        </S.CloseBtn>
        <S.LogoWrapper>
          <Icon iconName='Logo' iconSize='MEDIUM' />
          <Icon iconName='SharePlate' iconSize='MEDIUM' />
        </S.LogoWrapper>
        {loginMention}
        <S.KakaoLoginButton>
          <Icon iconName='Kakao' iconSize='MEDIUM' />
          {kakaoLoginMention}
        </S.KakaoLoginButton>
      </S.LoginWrapper>
    </Portal>
  );
};

export default Login;
