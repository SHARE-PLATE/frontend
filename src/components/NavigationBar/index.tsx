import { useLocation } from 'react-router-dom';

import * as S from '@components/NavigationBar/NavigationBar.style';
import useNavigationBarInfo from '@components/NavigationBar/useNavigationBarInfo';
import ShareFormButton from '@components/ShareFormButton';
import Icon from '@components/common/Icon';

const NavigationBar = () => {
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
    <S.NavigationBarWrapper>
      <ShareFormButton />
      {navigationBarBtns}
    </S.NavigationBarWrapper>
  );
};

export default NavigationBar;
