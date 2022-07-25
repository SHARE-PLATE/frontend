import { useState } from 'react';

import Portal from '@components/Portal';

import * as S from './Sidebar.style';

const SideBar = () => {
  const [isPortal, setIsPortal] = useState(false);

  return (
    <button onClick={() => setIsPortal(true)}>
      SIDEBAR
      <Portal isPortal={isPortal} setIsPortal={setIsPortal} type='sidebar'>
        <S.SideBarWrapper>SIDEBAR CONTENT</S.SideBarWrapper>
      </Portal>
    </button>
  );
};

export default SideBar;
