import * as S from '@components/BottomBar/BottomBar.style';
import InteractionBar from '@components/InteractionBar';
import NavigationBar from '@components/NavigationBar';
import useCheckPathname from '@hooks/useCheckPathname';

const BottomBar = () => {
  let bottomBarContent;

  const isShareDetail = useCheckPathname({ targetPaths: ['shareDetail'] });
  const isShareForm = useCheckPathname({ targetPaths: ['shareForm'] });

  if (isShareDetail) bottomBarContent = <InteractionBar />;
  if (isShareForm) bottomBarContent = null;
  if (bottomBarContent === undefined) bottomBarContent = <NavigationBar />;

  return (
    <>
      <S.BottomBarArea />
      <S.BottomBarWrapper>{bottomBarContent}</S.BottomBarWrapper>
    </>
  );
};

export default BottomBar;
