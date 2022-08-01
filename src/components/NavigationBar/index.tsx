import { Link, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import * as S from '@components/NavigationBar/NavigationBar.style';
import { modalState } from '@store/portal';

const useNavigationBarInfo = () => {
  const setIsModalPortal = useSetRecoilState(modalState);
  const navigationBarInfo = [
    { id: 0, name: 'HOME', link: '/' },
    { id: 1, name: 'SHARE', link: 'share-list' },
    { id: 2, name: 'SEARCH', clickHandler: () => setIsModalPortal(true) },
    { id: 3, name: 'FORM', link: 'share-form' },
    { id: 4, name: 'PROFILE', link: 'profile' },
  ];

  return navigationBarInfo;
};

const NavigationBar = () => {
  const { pathname } = useLocation();
  const navigationBarInfo = useNavigationBarInfo();
  const NavigtaionBarBtns = navigationBarInfo.map(({ id, name, link, clickHandler }) => (
    <S.NavigationBarBtn key={id} onClick={() => clickHandler && clickHandler()}>
      <Link to={link || pathname}>{name}</Link>
    </S.NavigationBarBtn>
  ));

  return <S.NavigationBarWrapper>{NavigtaionBarBtns}</S.NavigationBarWrapper>;
};

export default NavigationBar;
