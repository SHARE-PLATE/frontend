import { useEffect, useRef } from 'react';

const useTimeout = (callback: any, delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => savedCallback.current(), delay);

    return () => clearTimeout(timeoutRef.current);
  }, [delay]);

  return timeoutRef;
};

export default useTimeout;
