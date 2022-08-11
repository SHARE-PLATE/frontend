import { useLocation } from 'react-router-dom';

import * as S from '@components/BottomBar/BottomBar.style';
import ShareFormButton from '@components/ShareFormButton';
import Icon from '@components/common/Icon';

import useNavigationBarInfo from './useNavigationBarInfo';

const BottomBar = () => {
  const { pathname } = useLocation();
  const navigationBarInfo = useNavigationBarInfo();
  const navigationBarBtns = navigationBarInfo.map(({ id, name, link, clickHandler, icon }) => (
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
    <>
      <S.NavigationArea />
      <S.BottomBarWrapper>
        <S.NavigationBarWrapper>
          <ShareFormButton />
          {navigationBarBtns}
        </S.NavigationBarWrapper>
      </S.BottomBarWrapper>
    </>
  );
};

export default BottomBar;
