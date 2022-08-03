import React, { ReactNode, useRef, useEffect } from 'react';

import { createPortal } from 'react-dom';
import { SetterOrUpdater } from 'recoil';

import { PortalType } from '@type/PortalType';

import * as S from './Portal.style';

type PortalPropsType = {
  isPortal: boolean;
  setIsPortal: SetterOrUpdater<boolean>;
  children: ReactNode;
  type: PortalType;
  closeBtn?: React.RefObject<HTMLButtonElement>;
};

const PortalRoot = ({ children }: { children: ReactNode }) => {
  const element = document.getElementById('portal-root');
  return element && createPortal(children, element);
};

const Portal = ({ setIsPortal, isPortal, children, type, closeBtn }: PortalPropsType) => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  const closePortal = (event: React.MouseEvent | MouseEvent) => {
    event.stopPropagation();
    setIsPortal(false);
  };

  const changeBackgroundDisplay = ({ isShowed }: { isShowed: boolean }) => {
    const background = backgroundRef.current;
    if (background) background.style.display = isShowed ? 'flex' : 'none';
  };

  const handleAnimationEnd = () => {
    if (!isPortal) changeBackgroundDisplay({ isShowed: false });
  };

  useEffect(() => {
    if (isPortal) changeBackgroundDisplay({ isShowed: true });
  }, [isPortal]);

  useEffect(() => {
    if (!closeBtn) return;
    closeBtn.current?.addEventListener('click', closePortal);
  }, [closeBtn]);

  return (
    <PortalRoot>
      <S.PortalBackground
        portalType={type}
        ref={backgroundRef}
        onClick={closePortal}
        isPortal={isPortal}
        onAnimationEnd={handleAnimationEnd}
      >
        <S.PortalContent
          onClick={(event) => event.stopPropagation()}
          portalType={type}
          isPortal={isPortal}
        >
          {children}
        </S.PortalContent>
      </S.PortalBackground>
    </PortalRoot>
  );
};

export default Portal;
