import { useLocation } from 'react-router-dom';

import { pathName, pathNameKeysType } from '@constants/pathName';

type useCheckPathnameParamsType = {
  targetPaths: (pathNameKeysType | undefined)[];
};

const useCheckPathname = ({ targetPaths }: useCheckPathnameParamsType) => {
  const { pathname } = useLocation();
  const isTargetPathname = targetPaths.some((targetPath) => {
    if (targetPath === 'main') {
      return pathname === '/';
    } else {
      return targetPath && pathname.startsWith(pathName[targetPath]);
    }
  });

  return isTargetPathname;
};

export default useCheckPathname;
