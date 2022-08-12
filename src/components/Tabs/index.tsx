import { SetterOrUpdater, useRecoilState } from 'recoil';

import * as S from '@components/Tabs/Tabs.styled';
import { activeShareList, CurrentShareListType } from '@store/filterShareList';

interface TabsPropsType {
  curShareList: string;
  setCurShareList: SetterOrUpdater<CurrentShareListType>;
}

const Tabs = ({ curShareList, setCurShareList }: TabsPropsType) => {
  const [activeShareListValue, setActiveShareListValue] = useRecoilState(activeShareList);

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
    if (curShareList === value) return;

    if (curShareList === 'delivery') setCurShareList('ingredient');

    if (curShareList === 'ingredient') setCurShareList('delivery');

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
              {title}
            </div>
          );
        })}
      </S.TabMenu>
    </S.Wrapper>
  );
};

export default Tabs;
