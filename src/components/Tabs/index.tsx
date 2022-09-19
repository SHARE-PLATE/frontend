import { RecoilState, useSetRecoilState } from 'recoil';

import * as S from '@components/Tabs/Tabs.styled';

export type TabsInfoType<T> = {
  title: string;
  value: T;
  active: boolean;
}[];

type TabsPropsType<T> = {
  tabsInfo: TabsInfoType<T>;
  targetAtom: RecoilState<T>;
};

/** 두 가지 이상의 카테고리를 보여줄 때 사용합니다. */
const Tabs = <T extends unknown>({ tabsInfo, targetAtom }: TabsPropsType<T>) => {
  const setAtom = useSetRecoilState(targetAtom);
  const tabs = tabsInfo.map(({ title, value, active }) => (
    <S.TabWrapper key={title} onClick={() => setAtom(value)} active={active}>
      <span>{title}</span>
    </S.TabWrapper>
  ));

  return <S.Wrapper>{tabs}</S.Wrapper>;
};

export default Tabs;
