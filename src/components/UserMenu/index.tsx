import { useNavigate } from 'react-router-dom';

import { useLogout } from '@api/account';
import * as S from '@components/UserMenu/UserMenu.style';
import Icon from '@components/common/Icon';
import { userMenuType } from '@constants/userMenu';

interface UserMenuPropsType {
  userMenu: userMenuType[];
}

const UserMenu = ({ userMenu }: UserMenuPropsType) => {
  const navigate = useNavigate();
  const logout = useLogout();
  return (
    <S.Wrapper>
      {userMenu.map(({ id, link, title, icon, isLogout }) => (
        <S.ItemWrapper
          key={id}
          onClick={() => {
            isLogout && logout();
            navigate(link);
          }}
        >
          <S.Title>
            <Icon iconName={icon} />
            {title}
          </S.Title>
          <Icon iconName='RightArrow' iconSize={1} />
        </S.ItemWrapper>
      ))}
    </S.Wrapper>
  );
};

export default UserMenu;
