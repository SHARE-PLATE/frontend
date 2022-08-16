import { SetterOrUpdater, useRecoilState } from 'recoil';

import * as S from '@components/Tabs/Tabs.styled';
import { activeShareList, activeShareListType } from '@store/filterShareList';

interface TabsPropsType {
  activeShareListValue: activeShareListType;
  setActiveShareListValue: SetterOrUpdater<activeShareListType>;
}

const Tabs = ({ activeShareListValue, setActiveShareListValue }: TabsPropsType) => {
  const shareListTabs = [
    {
      title: '배달쉐어',
      value: 'delivery' as const,
      active: activeShareListValue.delivery,
    },
    {
      title: '재료쉐어',
      value: 'ingredient' as const,
      active: activeShareListValue.ingredient,
    },
  ];

  const changeTab = (value: string) => {
    if (
      (value === 'delivery' && activeShareListValue.delivery) ||
      (value === 'ingredient' && activeShareListValue.ingredient)
    )
      return;

    setActiveShareListValue({
      delivery: !activeShareListValue.delivery,
      ingredient: !activeShareListValue.ingredient,
    });
  };

  const tabs = shareListTabs.map(({ title, value, active }) => (
    <S.TabWrapper key={value} onClick={() => changeTab(value)} active={active} value={value}>
      {title}
    </S.TabWrapper>
  ));

  return <S.Wrapper>{tabs}</S.Wrapper>;
};

export default Tabs;
