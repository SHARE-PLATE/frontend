import * as S from '@components/BottomBar/BottomBar.style';
import ChattingBar from '@components/ChattingBar';
import InteractionBar from '@components/InteractionBar';
import NavigationBar from '@components/NavigationBar';
import useCheckPathname from '@hooks/useCheckPathname';

const BottomBar = () => {
  let bottomBarContent;

  const isShareDetail = useCheckPathname({ targetPaths: ['shareDetail'] });
  const isShareForm = useCheckPathname({ targetPaths: ['shareForm'] });
  const isChattingDetail = useCheckPathname({ targetPaths: ['chattingDetail'] });

  if (isShareDetail) bottomBarContent = <InteractionBar />;
  if (isShareForm) bottomBarContent = null;
  if (isChattingDetail) bottomBarContent = <ChattingBar />;
  if (bottomBarContent === undefined) bottomBarContent = <NavigationBar />;

  return <S.BottomBarWrapper>{bottomBarContent}</S.BottomBarWrapper>;
};

export default BottomBar;
