import MyMenu from '@components/MyMenu';
import ProfileHeader from '@components/ProfileHeader';
import ReserveShare from '@components/ReserveShare';
import UserInfo from '@components/UserInfo';
import UserMenu from '@components/UserMenu';

const Profile = () => {
  return (
    <>
      <ProfileHeader />
      <UserInfo />
      <MyMenu />
      <ReserveShare />
      <UserMenu />
    </>
  );
};

export default Profile;
