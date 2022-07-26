import { Link, useLocation } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import Portal from '@components/Portal';
import * as S from '@components/SideBar/Sidebar.style';
import { sidebarState, modalState } from '@store/portal';

const Sidebar = () => {
  const [isSidebarPortal, setIsSidebarPortal] = useRecoilState(sidebarState);
  const setIsModalPortal = useSetRecoilState(modalState);
  const { pathname } = useLocation();
  const sideBarContentsInfo = [
    { id: 0, name: '로그인', clickHandler: () => setIsModalPortal(true) },
    { id: 1, name: '홈', link: '/' },
    { id: 2, name: '배달 쉐어', link: '/share-list' },
    { id: 3, name: '재료 쉐어', link: '/share-list' },
    { id: 4, name: '쉐어 작성', link: 'share-form' },
    { id: 5, name: '기타', link: 'notice' },
  ];

  const sidebarContents = sideBarContentsInfo.map(({ id, name, clickHandler, link }) => {
    const clickButtonHandler = () => {
      setIsSidebarPortal(false);
      if (clickHandler) clickHandler();
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
