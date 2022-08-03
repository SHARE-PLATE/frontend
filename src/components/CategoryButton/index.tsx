import { useSetRecoilState } from 'recoil';

import Button from '@components/common/Button';
import { BUTTON_SIZE } from '@components/common/Button/constants';
import { categoryItem } from '@constants/category';
import { currentShareList } from '@store/shareList';

const CategoryButton = () => {
  const setCurrentShareList = useSetRecoilState(currentShareList);

  const handelClickChangeList = (filter: string) => setCurrentShareList(filter);

  const category = categoryItem.map(({ id, name, filter }) => (
    <Button
      key={id}
      size={BUTTON_SIZE.SMALL}
      onClick={() => {
        handelClickChangeList(filter);
      }}
    >
      {name}
    </Button>
  ));

  return <div>{category}</div>;
};

export default CategoryButton;
