import React, { ReactNode, useRef, MouseEvent, useEffect } from 'react';

import { createPortal } from 'react-dom';

import * as S from './Portal.style';

type PortalPropsType = {
  isPortal: boolean;
  setIsPortal: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
};

const PortalRoot = ({ children }: { children: ReactNode }) => {
  const element = document.getElementById('portal-root');
  return element && createPortal(children, element);
};

const Portal = ({ setIsPortal, isPortal, children }: PortalPropsType) => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  const closePortal = (event: MouseEvent) => {
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

  return (
    <PortalRoot>
      <S.PortalBackground
        ref={backgroundRef}
        onClick={closePortal}
        isPortal={isPortal}
        onAnimationEnd={handleAnimationEnd}
      >
        <S.PortalContent onClick={(event) => event.stopPropagation()}>
          <S.PortalCloseButton onClick={closePortal}>X</S.PortalCloseButton>
          {children}
        </S.PortalContent>
      </S.PortalBackground>
    </PortalRoot>
  );
};

export default Portal;
