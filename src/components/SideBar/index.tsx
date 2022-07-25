import { useRecoilState, useSetRecoilState } from 'recoil';

import Portal from '@components/Portal';
import { sidebarState, modalState } from '@store/portal';

import * as S from './Sidebar.style';

const Sidebar = () => {
  const [isSidebarPortal, setIsSidebarPortal] = useRecoilState(sidebarState);
  const setIsModalPortal = useSetRecoilState(modalState);

  const showSideBar = () => {
    setIsSidebarPortal(true);
  };

  const showLoginModal = () => {
    setIsSidebarPortal(false);
    setIsModalPortal(true);
  };

  const sideBarContentsInfo = [
    { id: 0, name: '로그인', clickHandler: () => showLoginModal() },
    { id: 1, name: '홈' },
    { id: 2, name: '배달 쉐어' },
    { id: 3, name: '재료 쉐어' },
    { id: 4, name: '쉐어 작성' },
    { id: 5, name: '기타' },
  ];

  const sidebarContents = sideBarContentsInfo.map(({ id, name, clickHandler }) => {
    return (
      <S.SideBarContent key={id} onClick={clickHandler}>
        {name}
      </S.SideBarContent>
    );
  });

  return (
    <button onClick={showSideBar}>
      SIDEBAR
      <Portal isPortal={isSidebarPortal} setIsPortal={setIsSidebarPortal} type='sidebar'>
        <S.SideBarWrapper>{sidebarContents}</S.SideBarWrapper>
      </Portal>
    </button>
  );
};

export default Sidebar;
