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

export const routes = [
  { path: '/', element: <Main /> },
  { path: '/login-callback', element: <LoginCallback /> },
  { path: '/share-list', element: <ShareList /> },
  { path: '/share-detail', element: <ShareDetail /> },
  { path: '/notice', element: <Notice /> },
  { path: '/error', element: <Error /> },
  {
    element: <ProtectedRoute />,
    children: [
      { path: '/share-form', element: <ShareForm /> },
      { path: '/profile', element: <Profile /> },
    ],
  },
  { path: '*', element: <NotFound /> },
];
