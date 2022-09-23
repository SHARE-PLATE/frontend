import { useSetRecoilState } from 'recoil';

import { isLoginTriggerState } from '@store/user';

import { useInterval } from './useInterval';

// check login state every hour
const intervalTime = 1000 * 60 * 60;

const useCheckIsLogin = () => {
  const setIsLoginTrigger = useSetRecoilState(isLoginTriggerState);

  const checkLogin = () => {
    setIsLoginTrigger((prev) => prev + 1);
  };

  useInterval(checkLogin, intervalTime);
};

export default useCheckIsLogin;
