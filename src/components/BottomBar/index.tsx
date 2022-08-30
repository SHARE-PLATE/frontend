import * as S from '@components/BottomBar/BottomBar.style';
import ChatroomBar from '@components/ChatroomBar';
import NavigationBar from '@components/NavigationBar';
import useCheckPathname from '@hooks/useCheckPathname';

const BottomBar = () => {
  let bottomBarContent;

  const isNoBottomBar = useCheckPathname({
    targetPaths: ['shareForm', 'loginCallback', 'shareDetail'],
  });
  const isChatroomDetail = useCheckPathname({ targetPaths: ['chatroomDetail'] });

  if (isNoBottomBar) bottomBarContent = null;
  if (isChatroomDetail) bottomBarContent = <ChatroomBar />;
  if (bottomBarContent === undefined) bottomBarContent = <NavigationBar />;

  return <S.BottomBarWrapper>{bottomBarContent}</S.BottomBarWrapper>;
};

export default BottomBar;
