import * as S from '@components/UserMenu/UserMenu.style';
import Icon from '@components/common/Icon';
import { userMenu, userMenuType } from '@constants/userMenu';

const UserMenu = () => {
  const mokData: userMenuType[] = userMenu;
  return (
    <S.Wrapper>
      {mokData.map((data: userMenuType) => (
        <S.ItemWrapper key={data.id}>
          <S.Title>{data.title}</S.Title>
          <Icon iconName='RightArrow' iconSize='LARGE' />
        </S.ItemWrapper>
      ))}
    </S.Wrapper>
  );
};

export default UserMenu;
