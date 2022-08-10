import { Link, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import Portal from '@components/Portal';
import * as S from '@components/SideBar/SideBar.style';
import { sideBarContentsInfo } from '@components/SideBar/sideBarContentsInfo';
import { PortalNameType, portalState } from '@store/portal';

const portalName: PortalNameType = 'sidebar';

const Sidebar = () => {
  const setPortal = useSetRecoilState(portalState);
  const { pathname } = useLocation();
  const sidebarContents = sideBarContentsInfo.map(({ id, name, link }) => {
    const clickButtonHandler = () => {
      setPortal(null);
      if (name === '로그인') setPortal('login');
    };
    return (
      <Link to={link || pathname} key={id}>
        <S.SideBarContent onClick={clickButtonHandler}>{name}</S.SideBarContent>
      </Link>
    );
  });

  return (
    <button onClick={() => setPortal(portalName)}>
      SIDEBAR
      <Portal portalName={portalName} type='sidebar'>
        <S.SideBarWrapper>{sidebarContents}</S.SideBarWrapper>
      </Portal>
    </button>
  );
};

export default Sidebar;
