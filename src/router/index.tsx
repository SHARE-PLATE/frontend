import { pathName as P } from '@constants/pathName';
import Error from '@pages/Error';
import LoginCallback from '@pages/LoginCallback';
import Main from '@pages/Main';
import NotFound from '@pages/NotFound';
import Notice from '@pages/Notice';
import Profile from '@pages/Profile';
import ShareDetail from '@pages/ShareDetail';
import ShareForm from '@pages/ShareForm';
import ShareList from '@pages/ShareList';
import ProtectedRoute from '@router/ProtectedRoute';

export const pathName = {
  main: '',
  shareList: 'share-list',
  loginCallback: 'login-callback',
  shareDetail: 'share-detail',
  notice: 'notice',
  error: 'error',
  shareForm: 'share-form',
  profile: 'profile',
  other: '*',
};

export const routes = [
  { path: P.main, element: <Main /> },
  { path: P.loginCallback, element: <LoginCallback /> },
  { path: P.shareList, element: <ShareList /> },
  { path: P.shareDetail, element: <ShareDetail /> },
  { path: P.notice, element: <Notice /> },
  { path: P.error, element: <Error /> },
  {
    element: <ProtectedRoute />,
    children: [
      { path: P.shareForm, element: <ShareForm /> },
      { path: P.profile, element: <Profile /> },
    ],
  },
  { path: P.other, element: <NotFound /> },
];
