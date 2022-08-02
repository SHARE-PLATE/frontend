import { Link, useLocation } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import Portal from '@components/Portal';
import * as S from '@components/SideBar/SideBar.style';
import { sideBarContentsInfo } from '@components/SideBar/sidebarContentsInfo';
import { sidebarState, modalState } from '@store/portal';

const Sidebar = () => {
  const [isSidebarPortal, setIsSidebarPortal] = useRecoilState(sidebarState);
  const setIsModalPortal = useSetRecoilState(modalState);
  const { pathname } = useLocation();
  const sidebarContents = sideBarContentsInfo.map(({ id, name, link }) => {
    const clickButtonHandler = () => {
      setIsSidebarPortal(false);
      if (name === '로그인') setIsModalPortal(true);
    };
    return (
      <Link to={link || pathname} key={id}>
        <S.SideBarContent onClick={clickButtonHandler}>{name}</S.SideBarContent>
      </Link>
    );
  });

  return (
    <button onClick={() => setIsSidebarPortal(true)}>
      SIDEBAR
      <Portal isPortal={isSidebarPortal} setIsPortal={setIsSidebarPortal} type='sidebar'>
        <S.SideBarWrapper>{sidebarContents}</S.SideBarWrapper>
      </Portal>
    </button>
  );
};

export default Sidebar;
