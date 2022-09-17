import { useRef } from 'react';

import { getLoginPage } from '@api/account';
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
      <S.Wrapper>
        <S.CloseBtn ref={closeBtn}>
          <Icon iconName='X_Icon' iconSize={0.75} />
        </S.CloseBtn>
        <S.ContentWrapper>
          <S.LogoWrapper>
            <Icon iconName='Logo' iconSize={2} />
            <Icon iconName='SharePlate' iconSize={11.5} />
          </S.LogoWrapper>
          {loginMention}
          <S.KakaoLoginButton onClick={getLoginPage}>
            <Icon iconName='Kakao' />
            {kakaoLoginMention}
          </S.KakaoLoginButton>
          <S.PersonImagingWrapper>
            <Icon iconName='PersonImaging' iconSize={28.3} />
          </S.PersonImagingWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    </Portal>
  );
};

export default Login;
