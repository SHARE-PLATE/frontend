import { pathName as P } from '@constants/pathName';
import Chatting from '@pages/Chatting';
import ChattingDetail from '@pages/ChattingDetail';
import Error from '@pages/Error';
import LoginCallback from '@pages/LoginCallback';
import Main from '@pages/Main';
import NotFound from '@pages/NotFound';
import Notice from '@pages/Notice';
import Profile from '@pages/Profile';
import ShareDetail from '@pages/ShareDetail';
import ShareList from '@pages/ShareList';
import ShareRegistration from '@pages/ShareRegistration';
import ProtectedRoute from '@router/ProtectedRoute';

export const routes = [
  { path: P.main, element: <Main /> },
  { path: P.loginCallback, element: <LoginCallback /> },
  { path: P.shareList, element: <ShareList /> },
  { path: P.shareDetail + '/:id', element: <ShareDetail /> },
  { path: P.shareForm + '/:type', element: <ShareRegistration /> }, // 삭제예정
  { path: P.notice, element: <Notice /> },
  { path: P.error, element: <Error /> },
  {
    element: <ProtectedRoute />,
    children: [
      { path: P.chatting, element: <Chatting /> },
      { path: P.chattingDetail + '/:id', element: <ChattingDetail /> },
      { path: P.shareForm + '/:type', element: <ShareRegistration /> },
      { path: P.profile, element: <Profile /> },
    ],
  },
  { path: P.other, element: <NotFound /> },
];
