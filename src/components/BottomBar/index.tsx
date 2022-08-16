import { useLocation } from 'react-router-dom';

import * as S from '@components/BottomBar/BottomBar.style';
import InteractionBar from '@components/InteractionBar';
import NavigationBar from '@components/NavigationBar';
import { pathName } from '@constants/pathName';

const { shareDetail } = pathName;

const BottomBar = () => {
  const { pathname } = useLocation();
  const isShareDetailPage = pathname.includes(shareDetail);
  const bottomBarContent = isShareDetailPage ? <InteractionBar /> : <NavigationBar />;

  return (
    <>
      <S.BottomBarArea />
      <S.BottomBarWrapper>{bottomBarContent}</S.BottomBarWrapper>
    </>
  );
};

export default BottomBar;
