import * as S from '@components/BottomBar/BottomBar.style';
import ChattingBar from '@components/ChattingBar';
import NavigationBar from '@components/NavigationBar';
import useCheckPathname from '@hooks/useCheckPathname';

const BottomBar = () => {
  let bottomBarContent;

  const isNoBottomBar = useCheckPathname({
    targetPaths: ['shareForm', 'loginCallback', 'shareDetail'],
  });
  const isChattingDetail = useCheckPathname({ targetPaths: ['chattingDetail'] });

  if (isNoBottomBar) bottomBarContent = null;
  if (isChattingDetail) bottomBarContent = <ChattingBar />;
  if (bottomBarContent === undefined) bottomBarContent = <NavigationBar />;

  return <S.BottomBarWrapper>{bottomBarContent}</S.BottomBarWrapper>;
};

export default BottomBar;
