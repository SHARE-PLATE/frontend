import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { IconsType } from '@assets/icons';
import { pathName, pathNameKeysType } from '@constants/pathName';
import { portalState } from '@store/portal';

type NavigationBarInfoType = {
  id: number;
  icon: IconsType;
  name: string;
  link?: pathNameKeysType;
  clickHandler: (link?: pathNameKeysType) => void;
}[];

const useNavigationBarInfo = () => {
  const [portal, setPortal] = useRecoilState(portalState);
  const navigate = useNavigate();

  const clickHandler = (link?: pathNameKeysType) => {
    portal && setPortal(null);
    if (link) navigate(pathName[link]);
  };

  const navigationBarInfo: NavigationBarInfoType = [
    { id: 0, icon: 'Clock', name: '홈', clickHandler, link: 'main' },
    {
      id: 2,
      icon: 'Clock',
      name: '검색',
      clickHandler: () => (!portal ? setPortal('search') : setPortal(null)),
    },
    { id: 1, icon: 'Clock', name: '쉐어', clickHandler, link: 'shareList' },
    {
      id: 3,
      icon: 'Clock',
      name: '채팅',
      clickHandler,
      link: 'chatting',
    },
    { id: 4, icon: 'Clock', name: '마이메뉴', clickHandler, link: 'profile' },
  ];

  return navigationBarInfo;
};

export default useNavigationBarInfo;
