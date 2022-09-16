import { Dispatch, SetStateAction, useLayoutEffect, useRef, useState } from 'react';

import { RecoilState, useSetRecoilState } from 'recoil';

import * as S from '@components/Tabs/Tabs.styled';

export type TabsInfoType<T> = {
  title: string;
  value: T;
  active: boolean;
  order: number;
}[];

type TabsPropsType<T> = {
  tabsInfo: TabsInfoType<T>;
  targetAtom: RecoilState<T>;
};

type TabPropsType<T> = {
  title: string;
  value: T;
  active: boolean;
  order: number;
  targetAtom: RecoilState<T>;
  setWidthArray: Dispatch<SetStateAction<number[]>>;
  setSelectedTabOrder: Dispatch<SetStateAction<number>>;
};

const Tab = <T extends unknown>({
  title,
  value,
  active,
  order,
  targetAtom,
  setWidthArray,
  setSelectedTabOrder,
}: TabPropsType<T>) => {
  const widthRef = useRef<HTMLDivElement>(null);
  const setAtom = useSetRecoilState(targetAtom);

  const handleClickTab = () => {
    setAtom(value);
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
  }, []);

  return (
    <S.TabWrapper ref={widthRef} key={title} onClick={handleClickTab} active={active}>
      <span>{title}</span>
    </S.TabWrapper>
  );
};

/** 두 가지 이상의 카테고리를 보여줄 때 사용합니다. */
const Tabs = <T extends unknown>({ tabsInfo, targetAtom }: TabsPropsType<T>) => {
  const [widthArray, setWidthArray] = useState<number[]>([]);
  const [selectedTabOrder, setSelectedTabOrder] = useState(0);
  const selectedTabWidth = widthArray[selectedTabOrder];
  const selectedWidthArray = widthArray.slice(0, selectedTabOrder);
  const selectedTabLeft = selectedWidthArray.reduce((prev, cur) => prev + cur + S.tabsGapPx, 0);

  const tabs = tabsInfo.map((props) => (
    <Tab<T> key={props.title} {...{ targetAtom, setWidthArray, setSelectedTabOrder }} {...props} />
  ));

  return (
    <S.Wrapper selectedTabWidth={selectedTabWidth} selectedTabLeft={selectedTabLeft}>
      {tabs}
    </S.Wrapper>
  );
};

export default Tabs;
