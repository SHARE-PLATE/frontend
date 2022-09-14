import { Dispatch, SetStateAction, useLayoutEffect, useRef, useState } from 'react';

import { SetterOrUpdater } from 'recoil';

import * as S from '@components/Tabs/Tabs.styled';

export type TabsInfoType<T> = {
  title: string;
  value: T;
  active: boolean;
  order: number;
}[];

type TabsPropsType<T> = {
  tabsInfo: TabsInfoType<T>;
  setTab: SetterOrUpdater<T>;
};

type TabPropsType<T> = {
  title: string;
  value: T;
  active: boolean;
  order: number;
  setTab: SetterOrUpdater<T>;
  setWidthArray: Dispatch<SetStateAction<number[]>>;
  setSelectedTabOrder: Dispatch<SetStateAction<number>>;
};

const Tab = <T extends unknown>({
  title,
  value,
  active,
  order,
  setTab,
  setWidthArray,
  setSelectedTabOrder,
}: TabPropsType<T>) => {
  const widthRef = useRef<HTMLDivElement>(null);

  const handleClickTab = () => {
    setTab(value);
    setSelectedTabOrder(order);
  };

  useLayoutEffect(() => {
    const newWidth = widthRef.current?.offsetWidth;

    if (!newWidth) return;

    setWidthArray((widthArray) => {
      const newWidthArray = [...widthArray];
      newWidthArray[order] = newWidth;
      return newWidthArray;
    });
  }, [widthRef]);

  return (
    <S.TabWrapper ref={widthRef} key={title} onClick={handleClickTab} active={active}>
      <span>{title}</span>
    </S.TabWrapper>
  );
};

/** 두 가지 이상의 카테고리를 보여줄 때 사용합니다. */
const Tabs = <T extends unknown>({ tabsInfo, setTab }: TabsPropsType<T>) => {
  let selectedTabLeft = 0;
  const [widthArray, setWidthArray] = useState<number[]>([]);
  const [selectedTabOrder, setSelectedTabOrder] = useState(0);
  const selectedTabWidth = widthArray[selectedTabOrder];

  widthArray.some((number, order) => {
    const isOrderLess = order < selectedTabOrder;
    if (isOrderLess) selectedTabLeft = selectedTabLeft + number + S.tabsGapPx;
    return isOrderLess;
  });

  const tabs = tabsInfo.map(({ title, value, active, order }) => (
    <Tab<T>
      key={title}
      {...{ title, value, active, order, setTab, setWidthArray, setSelectedTabOrder }}
    />
  ));

  return (
    <S.Wrapper selectedTabWidth={selectedTabWidth} selectedTabLeft={selectedTabLeft}>
      {tabs}
    </S.Wrapper>
  );
};

export default Tabs;
