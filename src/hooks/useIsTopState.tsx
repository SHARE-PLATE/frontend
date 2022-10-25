import { useState } from 'react';

const useIsTopState = () => {
  const [isTop, setIsTop] = useState(true);

  window.onscroll = () => {
    setIsTop(!window.scrollY);
  };

  return isTop;
};

export default useIsTopState;
