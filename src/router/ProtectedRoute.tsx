import { Outlet } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import HomeLogin from '@components/HomeLogin';
import { portalState } from '@store/portal';
import { isLoginState } from '@store/user';

const ProtectedRoute = () => {
  const isLogin = useRecoilValue(isLoginState);
  const setPortal = useSetRecoilState(portalState);

  if (!isLogin) setPortal('login');

  return isLogin ? <Outlet /> : <HomeLogin />;
};

export default ProtectedRoute;
