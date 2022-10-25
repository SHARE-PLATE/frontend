import { useEffect, useState } from 'react';

const useIsTopState = () => {
  const [isTop, setIsTop] = useState(false);

  window.onscroll = () => setIsTop(!window.scrollY);

  useEffect(() => {
    return () => {
      window.onscroll = null;
    };
  }, []);

  return isTop;
};

export default useIsTopState;
