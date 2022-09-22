import { useRecoilValue, useSetRecoilState } from 'recoil';

import { checkVerification, getBackAccessToken } from '@api/account';
import { isLoginState } from '@store/user';

import { useInterval } from './useInterval';

const useCheckLoginState = () => {
  const setIsLogin = useSetRecoilState(isLoginState);

  const checkIsLogin = async () => {
    const isVerificationRight = await checkVerification();
    if (isVerificationRight) {
      setIsLogin(true);
      return;
    }
    const isGetAccessToken = await getBackAccessToken();
    if (isGetAccessToken) {
      setIsLogin(true);
      return;
    }
    setIsLogin(false);
  };

  checkIsLogin();

  // check login state every 10 minutes
  useInterval(checkIsLogin, 600000);
};

export default useCheckLoginState;
