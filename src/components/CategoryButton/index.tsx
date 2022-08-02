import Button from '@components/common/Button';
import { BUTTON_SIZE } from '@components/common/Button/constants';
import { categoryItem } from '@constants/category';

const CategoryButton = () => {
  return (
    <div>
      {categoryItem.map(({ id, name }) => (
        <Button key={id} size={BUTTON_SIZE.SMALL} onClick={() => {}}>
          {name}
        </Button>
      ))}
    </div>
  );
};

export default CategoryButton;
