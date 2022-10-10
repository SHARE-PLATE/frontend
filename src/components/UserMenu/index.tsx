import { useNavigate } from 'react-router-dom';

import * as S from '@components/UserMenu/UserMenu.style';
import Icon from '@components/common/Icon';
import { userMenuType } from '@constants/userMenu';

interface UserMenuPropsType {
  userMenu: userMenuType[];
}

const UserMenu = ({ userMenu }: UserMenuPropsType) => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      {userMenu.map(({ id, link, title, icon, clickHandler }) => (
        <S.ItemWrapper key={id} onClick={!!link ? () => navigate(link) : clickHandler}>
          <S.Title>
            <Icon iconName={icon} />
            {title}
          </S.Title>
          <Icon iconName='RightArrow' iconSize='LARGE' />
        </S.ItemWrapper>
      ))}
    </S.Wrapper>
  );
};

export default UserMenu;
