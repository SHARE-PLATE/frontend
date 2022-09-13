import { SetterOrUpdater, useRecoilValue } from 'recoil';

import * as S from '@components/Tabs/Tabs.styled';
import { activeShareList, activeShareListType } from '@store/filterShareList';

interface TabsPropsType {
  activeShareListValue: activeShareListType;
  setActiveShareListValue: SetterOrUpdater<activeShareListType>;
}

const useShareListTabsInfo = () => {
  const activeShareListValue = useRecoilValue(activeShareList);
  const shareListTabs = [
    {
      title: '배달쉐어',
      value: 'delivery' as const,
      active: activeShareListValue === 'delivery',
    },
    {
      title: '재료쉐어',
      value: 'ingredient' as const,
      active: activeShareListValue === 'ingredient',
    },
  ];

  return shareListTabs;
};

const Tabs = ({ activeShareListValue, setActiveShareListValue }: TabsPropsType) => {
  const shareListTabs = useShareListTabsInfo();

  const changeTab = (value: activeShareListType) => {
    setActiveShareListValue(value);
  };

  const tabs = shareListTabs.map(({ title, value, active }) => (
    <S.TabWrapper key={value} onClick={() => changeTab(value)} active={active} value={value}>
      <span>{title}</span>
    </S.TabWrapper>
  ));

  return <S.Wrapper>{tabs}</S.Wrapper>;
};

export default Tabs;
