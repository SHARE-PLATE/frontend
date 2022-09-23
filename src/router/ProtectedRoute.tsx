import { Outlet } from 'react-router-dom';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import HomeLogin from '@components/HomeLogin';
import Loading from '@components/Loading';
import { portalState } from '@store/portal';
import { isLoginState } from '@store/user';

const ProtectedRoute = () => {
  const { state, contents } = useRecoilValueLoadable(isLoginState);
  const setPortal = useSetRecoilState(portalState);

  const getContent = () => {
    switch (state) {
      case 'hasValue':
        if (!contents) setPortal('login');
        return contents ? <Outlet /> : <HomeLogin />;
      case 'hasError':
        setPortal('login');
        return <HomeLogin />;
      case 'loading':
        return <Loading color='grey1' size={42} border={6} height='100vh' />;
    }
  };

  return getContent();
};

export default ProtectedRoute;
