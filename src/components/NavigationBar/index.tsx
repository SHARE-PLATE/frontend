import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import * as S from '@components/NavigationBar/NavigationBar.style';
import Search from '@components/Search';
import ShareFormButton from '@components/ShareFormButton';
import { portalState } from '@store/portal';

const useNavigationBarInfo = () => {
  const [portal, setPortal] = useRecoilState(portalState);
  const navigate = useNavigate();

  const clickHandler = (link: string) => {
    portal && setPortal(null);
    navigate(link);
  };

  const navigationBarInfo = [
    { id: 0, name: 'HOME', link: '/', clickHandler },
    { id: 1, name: 'SHARE', link: 'share-list', clickHandler },
    { id: 2, name: 'SEARCH', clickHandler: () => (!portal ? setPortal('full') : setPortal(null)) },
    { id: 3, name: 'FORM', link: 'share-form', clickHandler },
    { id: 4, name: 'PROFILE', link: 'profile', clickHandler },
  ];

  return navigationBarInfo;
};

const NavigationBar = () => {
  const { pathname } = useLocation();
  const navigationBarInfo = useNavigationBarInfo();
  const NavigtaionBarBtns = navigationBarInfo.map(({ id, name, link, clickHandler }) => (
    <S.NavigationBarBtn key={id} onClick={() => clickHandler(link || pathname)}>
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
