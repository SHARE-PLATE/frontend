import { useNavigate } from 'react-router-dom';

import UserInfo from '@components/UserInfo';
import UserMenu from '@components/UserMenu';
import BackTitleHeader from '@components/common/BackTitleHeader';
import { settingMenu } from '@constants/userMenu';
import { EDIT_PROFILE, OPTION_PROFILE } from '@constants/words';
import * as S from '@pages/ProfileSetting/ProfileSetting.style';

const ProfileSetting = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Header>
        <BackTitleHeader title={OPTION_PROFILE} backIconTargetPathname='profile' />
        <UserInfo textColor='#000' arrowIcon={false} />
        <S.ProfileEditBtn onClick={() => navigate('./edit-user-info')}>
          {EDIT_PROFILE}
        </S.ProfileEditBtn>
      </S.Header>
      <S.Contents>
        <UserMenu userMenu={settingMenu} />
      </S.Contents>
    </S.Wrapper>
  );
};

export default ProfileSetting;
