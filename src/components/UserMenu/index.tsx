import { useNavigate } from 'react-router-dom';

import * as S from '@components/UserMenu/UserMenu.style';
import Icon from '@components/common/Icon';
import { userMenu } from '@constants/userMenu';

const UserMenu = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      {userMenu.map(({ id, link, title, icon }) => (
        <S.ItemWrapper key={id} onClick={() => navigate(link)}>
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
