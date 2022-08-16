import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { IconsType } from '@assets/icons';
import { portalState } from '@store/portal';

type NavigationBarInfoType = {
  id: number;
  icon: IconsType;
  name: string;
  link?: string;
  clickHandler: (link: string) => void;
}[];

const useNavigationBarInfo = () => {
  const [portal, setPortal] = useRecoilState(portalState);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const clickHandler = (link: string) => {
    portal && setPortal(null);
    navigate(link || pathname);
  };

  const navigationBarInfo: NavigationBarInfoType = [
    { id: 0, icon: 'Clock', name: '홈', clickHandler, link: '/' },
    { id: 1, icon: 'Clock', name: '쉐어', clickHandler, link: '/share-list' },
    {
      id: 2,
      icon: 'Clock',
      name: '검색',
      clickHandler: () => (!portal ? setPortal('search') : setPortal(null)),
    },
    {
      id: 3,
      icon: 'Clock',
      name: '채팅',
      clickHandler: () => (!portal ? setPortal('login') : setPortal(null)),
    },
    { id: 4, icon: 'Clock', name: '마이메뉴', clickHandler, link: '/profile' },
  ];

  return navigationBarInfo;
};

export default useNavigationBarInfo;
