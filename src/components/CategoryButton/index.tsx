import { useState } from 'react';

import { SetterOrUpdater } from 'recoil';

import * as S from '@components/CategoryButton/CategoryButton.style';
import Button from '@components/common/Button';
import { CategoryItemType, HistoryListCategoryItemType } from '@constants/category';

interface CategoryButtonPropsType {
  categoryItem: HistoryListCategoryItemType[] | CategoryItemType[];
  setCurrentFilterList: SetterOrUpdater<any>;
}

const CategoryButton = ({ categoryItem, setCurrentFilterList }: CategoryButtonPropsType) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handelClickChangeList = (filter: boolean | string) => setCurrentFilterList(filter);

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
