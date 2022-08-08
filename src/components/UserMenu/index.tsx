import * as S from '@components/UserMenu/UserMenu.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
import { userMenu, userMenuType } from '@constants/userMenu';

const UserMenu = () => {
  const mokData: userMenuType[] = userMenu;
  return (
    <div>
      {mokData.map((data: userMenuType) => (
        <S.Wrapper key={data.id}>
          <S.Title>{data.title}</S.Title>
          <Icon iconName={ICON_NAME.RIGHT_ARROW} iconSize={ICON_SIZE.LARGE} />
        </S.Wrapper>
      ))}
    </div>
  );
};

export default UserMenu;
