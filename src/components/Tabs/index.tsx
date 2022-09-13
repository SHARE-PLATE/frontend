import { SetterOrUpdater } from 'recoil';

import * as S from '@components/Tabs/Tabs.styled';

type SelectedValueType = any; // 범용적인 타입 추가 설정 필요

type TabsInfoType = {
  title: string;
  value: SelectedValueType;
  active: boolean;
}[];

interface TabsPropsType<T> {
  tabsInfo: TabsInfoType;
  setTab: SetterOrUpdater<T>;
}

const Tabs = ({ tabsInfo, setTab }: TabsPropsType<SelectedValueType>) => {
  const tabs = tabsInfo.map(({ title, value, active }, order) => (
    <S.TabWrapper key={title} onClick={() => setTab(value)} active={active} order={order}>
      <span>{title}</span>
    </S.TabWrapper>
  ));

  return <S.Wrapper>{tabs}</S.Wrapper>;
};

export default Tabs;
