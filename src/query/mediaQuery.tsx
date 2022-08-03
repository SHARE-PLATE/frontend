import { ReactNode } from 'react';

import { isDesktop } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive';

export const Mobile = ({ children }: { children: ReactNode }) => {
  const isMobileEnv = useMediaQuery({
    query: '(max-width: 10000px)',
  });
  return <>{isMobileEnv && children}</>;
};

export const Pc = ({ children }: { children: ReactNode }) => {
  const isPcEnv = useMediaQuery({
    query: '(min-width: 770px)',
  });

  return <>{(isPcEnv || isDesktop) && children}</>;
};
