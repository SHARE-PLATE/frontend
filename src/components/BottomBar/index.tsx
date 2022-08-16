import * as S from '@components/BottomBar/BottomBar.style';
import InteractionBar from '@components/InteractionBar';
import NavigationBar from '@components/NavigationBar';
import useCheckPathname from '@hooks/useCheckPathname';

const BottomBar = () => {
  const isShareDetail = useCheckPathname({ targetPaths: ['shareDetail'] });
  const bottomBarContent = isShareDetail ? <InteractionBar /> : <NavigationBar />;

  return (
    <>
      <S.BottomBarArea />
      <S.BottomBarWrapper>{bottomBarContent}</S.BottomBarWrapper>
    </>
  );
};

export default BottomBar;
