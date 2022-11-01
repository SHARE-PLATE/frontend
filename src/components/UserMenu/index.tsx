import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { useLogout } from '@api/account';
import * as S from '@components/UserMenu/UserMenu.style';
import Icon from '@components/common/Icon';
import { answeringLogoutMention } from '@constants/mentions';
import { pathName } from '@constants/pathName';
import { userMenuType } from '@constants/userMenu';
import { LOGOUT } from '@constants/words';
import { selectModalInfoState } from '@store/modal';

interface UserMenuPropsType {
  userMenu: userMenuType[];
}

const UserMenu = ({ userMenu }: UserMenuPropsType) => {
  const navigate = useNavigate();
  const logout = useLogout();
  const setselectModalInfo = useSetRecoilState(selectModalInfoState);
  const showSelectModalLogout = () =>
    setselectModalInfo(({ trigger }) => ({
      trigger: trigger + 1,
      okMention: LOGOUT,
      answeringMention: answeringLogoutMention,
      onClickOkButton: async () => {
        const isSuccess = await logout();
        if (isSuccess) navigate(pathName.main);
      },
    }));

  return (
    <S.Wrapper>
      {userMenu.map(({ id, link, title, icon, isLogout }) => (
        <S.ItemWrapper
          key={id}
          onClick={() => {
            isLogout ? showSelectModalLogout() : navigate(pathName[link]);
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
