import { useLocation } from 'react-router-dom';

import { pathName, pathNameKeysType } from '@constants/pathName';

type useCheckPathnameParamsType = {
  targetPaths: pathNameKeysType[];
};

const useCheckPathname = ({ targetPaths }: useCheckPathnameParamsType) => {
  const { pathname } = useLocation();
  const isTargetPathname = targetPaths.some((targetPath) =>
    pathname.startsWith(pathName[targetPath]),
  );

  return isTargetPathname;
};

export default useCheckPathname;
