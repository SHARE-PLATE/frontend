import { Link, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import Portal from '@components/Portal';
import * as S from '@components/SideBar/SideBar.style';
import { sideBarContentsInfo } from '@components/SideBar/sidebarContentsInfo';
import { portalState } from '@store/portal';

const portalType = 'sidebar';

const Sidebar = () => {
  const [portal, setPortal] = useRecoilState(portalState);
  const { pathname } = useLocation();
  const sidebarContents = sideBarContentsInfo.map(({ id, name, link }) => {
    const clickButtonHandler = () => {
      setPortal(null);
      if (name === '로그인') setPortal('modal');
    };
    return (
      <Link to={link || pathname} key={id}>
        <S.SideBarContent onClick={clickButtonHandler}>{name}</S.SideBarContent>
      </Link>
    );
  });

  return (
    <button onClick={() => setPortal(portalType)}>
      SIDEBAR
      <Portal isPortal={portal === portalType} setPortal={setPortal} type={portalType}>
        <S.SideBarWrapper>{sidebarContents}</S.SideBarWrapper>
      </Portal>
    </button>
  );
};

export default Sidebar;
