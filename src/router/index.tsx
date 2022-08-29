import { pathName as P } from '@constants/pathName';
import ChatroomDetail from '@pages/ChatroomDetail';
import Chatrooms from '@pages/Chatrooms';
import Error from '@pages/Error';
import History from '@pages/History';
import LoginCallback from '@pages/LoginCallback';
import Main from '@pages/Main';
import NotFound from '@pages/NotFound';
import Notice from '@pages/Notice';
import Profile from '@pages/Profile';
import SearchShare from '@pages/SearchShare';
import ShareDetail from '@pages/ShareDetail';
import ShareList from '@pages/ShareList';
import ShareRegistration from '@pages/ShareRegistration';
import ProtectedRoute from '@router/ProtectedRoute';

export const routes = [
  { path: P.main, element: <Main /> },
  { path: P.loginCallback, element: <LoginCallback /> },
  { path: P.shareList, element: <ShareList /> },
  { path: P.shareDetail + '/:id', element: <ShareDetail /> },
  { path: P.searchShare, element: <SearchShare /> },
  { path: P.notice, element: <Notice /> },
  { path: P.error, element: <Error /> },
  {
    element: <ProtectedRoute />,
    children: [
      { path: P.chatrooms, element: <Chatrooms /> },
      { path: P.chatroomDetail + '/:id', element: <ChatroomDetail /> },
      { path: P.shareForm + '/:type', element: <ShareRegistration /> },
      { path: P.profile, element: <Profile /> },
      { path: P.salesHistory, element: <History historyType='sales' /> },
      { path: P.purchaseHistory, element: <History historyType='purchase' /> },
    ],
  },
  { path: P.other, element: <NotFound /> },
];
