import { SetterOrUpdater, useRecoilState } from 'recoil';

import * as S from '@components/Tabs/Tabs.styled';
import { activeShareList, CurrentShareListType } from '@store/filterShareList';

interface TabsPropsType {
  curShareList: CurrentShareListType;
  setCurShareList: SetterOrUpdater<CurrentShareListType>;
}

const Tabs = ({ curShareList, setCurShareList }: TabsPropsType) => {
  const [activeShareListValue, setActiveShareListValue] = useRecoilState(activeShareList);

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

  const handleClickTab = (value: CurrentShareListType) => {
    console.log(value);
    if (curShareList === value) return;
    if (curShareList === 'delivery') setCurShareList('ingredient');
    if (curShareList === 'ingredient') setCurShareList('delivery');

    setActiveShareListValue({
      delivery: !activeShareListValue.delivery,
      ingredient: !activeShareListValue.ingredient,
    });
  };

  const tabs = shareListTabs.map(({ title, value, active }) => (
    <S.TabWrapper key={value} onClick={() => handleClickTab(value)} active={active} value={value}>
      {title}
    </S.TabWrapper>
  ));

  return <S.Wrapper>{tabs}</S.Wrapper>;
};

export default Tabs;
