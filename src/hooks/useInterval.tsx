import { useEffect, useRef } from 'react';

type SavedCallbackFuncType = () => void;

export const useInterval = (callback: any, delay: number) => {
  const savedCallback = useRef<SavedCallbackFuncType | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const executeCallback = () => {
      if (savedCallback.current) savedCallback.current();
    };
    const timer = setInterval(executeCallback, delay);
    return () => clearInterval(timer);
  }, []);
};
