import { useNavigate } from 'react-router-dom';

import * as S from '@components/UserMenu/UserMenu.style';
import Icon from '@components/common/Icon';
import { userMenu, userMenuType } from '@constants/userMenu';

const UserMenu = () => {
  const navigate = useNavigate();
  const userMenuListData: userMenuType[] = userMenu;
  return (
    <S.Wrapper>
      {userMenuListData.map((data: userMenuType) => (
        <S.ItemWrapper key={data.id} onClick={() => navigate(data.link)}>
          <S.Title>{data.title}</S.Title>
          <Icon iconName='RightArrow' iconSize='LARGE' />
        </S.ItemWrapper>
      ))}
    </S.Wrapper>
  );
};

export default UserMenu;
