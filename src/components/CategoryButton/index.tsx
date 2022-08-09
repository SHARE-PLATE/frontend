import { useSetRecoilState } from 'recoil';

import * as S from '@components/CategoryButton/CategoryButton.tsyle';
import Button from '@components/common/Button';
import { BUTTON_SIZE } from '@components/common/Button/constants';
import { categoryItem } from '@constants/category';
import { currentFilterShareList } from '@store/filterShareList';

const CategoryButton = () => {
  const setCurrentFilterShareList = useSetRecoilState(currentFilterShareList);

  const handelClickChangeList = (filter: string) => setCurrentFilterShareList(filter);

  return (
    <S.Wrapper>
      {categoryItem.map(({ id, name, filter }) => (
        <S.Item key={id}>
          <Button
            size={BUTTON_SIZE.SMALL}
            onClick={() => {
              handelClickChangeList(filter);
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
