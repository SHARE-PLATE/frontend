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
      value: 'delivery',
      active: activeShareListValue.delivery,
    },
    {
      title: '재료쉐어',
      value: 'ingredient',
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

  return (
    <S.Wrapper>
      <S.TabMenu>
        {shareListTabs.map(({ title, value, active }) => {
          return (
            <div
              key={value}
              className={'tabMenu ' + value + (active ? ' active' : '')}
              onClick={() => changeTab(value)}
            >
              <h2>{title}</h2>
            </div>
          );
        })}
      </S.TabMenu>
    </S.Wrapper>
  );
};

export default Tabs;
