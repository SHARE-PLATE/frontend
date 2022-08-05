import MyMenu from '@components/MyMenu';
import ProfileHeader from '@components/ProfileHeader';
import ReserveShare from '@components/ReserveShare';
import UserInfo from '@components/UserInfo';
import UserMenu from '@components/UserMenu';
import * as S from '@pages/Profile/Profile.style';

const Profile = () => {
  return (
    <S.ProfileWrapper>
      <div>
        <ProfileHeader />
        <UserInfo />
        <MyMenu />
      </div>
      <ReserveShare />
      <UserMenu />
    </S.ProfileWrapper>
  );
};

export default Profile;
