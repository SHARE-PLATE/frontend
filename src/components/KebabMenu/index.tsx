import * as S from '@components/KebabMenu/KebabMenu.style';
import Icon from '@components/common/Icon';
import { OpenModal } from '@type/modalFunction';
interface KebabMenuPropsType {
  clickHandler: OpenModal;
}

const KebabMenu = ({ clickHandler }: KebabMenuPropsType) => {
  return (
    <S.KebabMenuWrapper type='ingredient'>
      <Icon iconName='KebabMenu' handleClick={(e) => clickHandler(e, { isDeleteModal: false })} />
    </S.KebabMenuWrapper>
  );
};

export default KebabMenu;
