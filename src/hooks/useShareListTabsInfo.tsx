import { useRecoilValue } from 'recoil';

import { activeShareList } from '@store/filterShareList';

const useShareListTabsInfo = () => {
  const activeShareListValue = useRecoilValue(activeShareList);
  const shareListTabs = [
    {
      order: 0,
      title: '배달쉐어',
      value: 'delivery' as const,
      active: activeShareListValue === 'delivery',
    },
    {
      order: 1,
      title: '재료쉐어',
      value: 'ingredient' as const,
      active: activeShareListValue === 'ingredient',
    },
  ];

  return shareListTabs;
};

export default useShareListTabsInfo;
