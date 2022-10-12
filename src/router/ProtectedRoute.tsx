import { Outlet } from 'react-router-dom';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import ErrorWithButtons from '@components/ErrorWithButtons';
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
        return contents ? <Outlet /> : <ErrorWithButtons />;
      case 'hasError':
        setPortal('login');
        return <ErrorWithButtons />;
      case 'loading':
        return <Loading color='grey1' size={42} border={6} height='100vh' />;
    }
  };

  return getContent();
};

export default ProtectedRoute;
