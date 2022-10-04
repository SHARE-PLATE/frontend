import { useRef } from 'react';

import { getLoginPage } from '@api/account';
import Icon from '@components/common/Icon';
import { loginMention, kakaoLoginMention } from '@constants/mentions';
import * as S from '@portals/LoginPortal/LoginPortal.style';
import Portal from '@portals/Portal';
import { PortalNameType } from '@store/portal';

const portalName: PortalNameType = 'login';

const LoginPortal = () => {
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
            <Icon iconName='PersonImaging' iconSize={28.3} noSkeleton={true} />
          </S.PersonImagingWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    </Portal>
  );
};

export default LoginPortal;
