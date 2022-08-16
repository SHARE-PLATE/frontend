import { useState } from 'react';

import { useSetRecoilState } from 'recoil';

import * as S from '@components/CategoryButton/CategoryButton.tsyle';
import Button from '@components/common/Button';
import { categoryItem } from '@constants/category';
import { currentFilterShareList } from '@store/filterShareList';

const CategoryButton = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const setCurrentFilterShareList = useSetRecoilState(currentFilterShareList);

  const handelClickChangeList = (filter: string) => setCurrentFilterShareList(filter);

  const handelClickChangeActiveIdx = (idx: number) => {
    setActiveIndex(idx);
  };

  return (
    <S.Wrapper>
      {categoryItem.map(({ id, name, filter }, idx) => (
        <S.Item key={id}>
          <Button
            size='small'
            active={activeIndex === idx}
            onClick={() => {
              handelClickChangeList(filter);
              handelClickChangeActiveIdx(idx);
            }}
          >
            {name}
          </Button>
        </S.Item>
      ))}
    </S.Wrapper>
  );
};

export default CategoryButton;
