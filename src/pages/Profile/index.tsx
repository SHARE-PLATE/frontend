import MyMenu from '@components/MyMenu';
import ProfileHeader from '@components/ProfileHeader';
import ReserveShare from '@components/ReserveShare';
import UserInfo from '@components/UserInfo';
import UserMenu from '@components/UserMenu';
import * as S from '@pages/Profile/Profile.style';

const Profile = () => {
  return (
    <S.ProfileWrapper>
      <S.UpperWrapper>
        <ProfileHeader />
        <UserInfo />
        <MyMenu />
      </S.UpperWrapper>
      <ReserveShare />
      <UserMenu />
    </S.ProfileWrapper>
  );
};

export default Profile;
