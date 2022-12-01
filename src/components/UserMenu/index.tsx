import { useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { useLogout } from '@api/account';
import * as S from '@components/UserMenu/UserMenu.style';
import Icon from '@components/common/Icon';
import SelectModal from '@components/common/SelectModal';
import { failToLogoutMention, logoutMention, successToLogoutMention } from '@constants/mentions';
import { userMenuType } from '@constants/userMenu';
import { LOGOUT } from '@constants/words';
import useModal from '@hooks/useModal';
import { bottomMessageState } from '@store/bottomMessage';

interface UserMenuPropsType {
  userMenu: userMenuType[];
}

const UserMenu = ({ userMenu }: UserMenuPropsType) => {
  const navigate = useNavigate();
  const logout = useLogout();
  const modalRef = useRef<HTMLDivElement>(null);
  const setBottomMessage = useSetRecoilState(bottomMessageState);
  const [isSelectModal, setIsSelectModal] = useModal({ modalRef });

  const tryLogout = async () => {
    const isLogoutSuccess = await logout();
    setIsSelectModal(false);

    if (isLogoutSuccess) {
      navigate('/');
      setBottomMessage(({ trigger }) => ({
        trigger: trigger + 1,
        message: successToLogoutMention,
        distance: 5,
      }));
    } else {
      setBottomMessage(({ trigger }) => ({
        trigger: trigger + 1,
        message: failToLogoutMention,
      }));
    }
  };

  return (
    <>
      <S.Wrapper>
        {userMenu.map(({ id, link, title, icon, isLogout }) => (
          <S.ItemWrapper
            key={id}
            onClick={() => (isLogout ? setIsSelectModal(true) : navigate(link))}
          >
            <S.Title>
              <Icon iconName={icon} />
              {title}
            </S.Title>
            <Icon iconName='RightArrow' iconSize={1} />
          </S.ItemWrapper>
        ))}
      </S.Wrapper>
      {isSelectModal && (
        <SelectModal
          modalRef={modalRef}
          onClickOkButton={tryLogout}
          onClickCancelButton={() => setIsSelectModal(false)}
          okMention={LOGOUT}
          answeringMention={logoutMention}
        />
      )}
    </>
  );
};

export default UserMenu;
