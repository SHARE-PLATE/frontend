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
  shareDetail: 'share-detail/:id',
  notice: 'notice',
  error: 'error',
  shareForm: 'share-form',
  profile: 'profile',
  other: '*',
};

export const routes = [
  { path: pathName.main, element: <Main /> },
  { path: pathName.loginCallback, element: <LoginCallback /> },
  { path: pathName.shareList, element: <ShareList /> },
  { path: pathName.shareDetail, element: <ShareDetail /> },
  { path: pathName.notice, element: <Notice /> },
  { path: pathName.error, element: <Error /> },
  {
    element: <ProtectedRoute />,
    children: [
      { path: pathName.shareForm, element: <ShareForm /> },
      { path: pathName.profile, element: <Profile /> },
    ],
  },
  { path: pathName.other, element: <NotFound /> },
];
