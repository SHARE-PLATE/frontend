import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { IconsType } from '@assets/icons';
import * as S from '@components/NavigationBar/NavigationBar.style';
import Search from '@components/Search';
import ShareFormButton from '@components/ShareFormButton';
import Icon from '@components/common/Icon';
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
      clickHandler: () => (!portal ? setPortal('full') : setPortal(null)),
    },
    { id: 3, icon: 'Clock', name: '채팅', clickHandler, link: '/share-form' },
    { id: 4, icon: 'Clock', name: '마이메뉴', clickHandler, link: '/profile' },
  ];

  return navigationBarInfo;
};

const NavigationBar = () => {
  const { pathname } = useLocation();
  const navigationBarInfo = useNavigationBarInfo();
  const NavigtaionBarBtns = navigationBarInfo.map(({ id, name, link, clickHandler, icon }) => (
    <S.NavigationBarBtn
      key={id}
      onClick={() => clickHandler(link || pathname)}
      isSelected={link === pathname}
    >
      <Icon iconName={icon} />
      {name}
    </S.NavigationBarBtn>
  ));

  return (
    <S.NavigationBarWrapper>
      <Search />
      <ShareFormButton />
      {NavigtaionBarBtns}
    </S.NavigationBarWrapper>
  );
};

export default NavigationBar;
