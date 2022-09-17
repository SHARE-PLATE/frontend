import MyMenu from '@components/MyMenu';
import PreviewShareListCenterImage from '@components/PreviewShareListCenterImage';
import ProfileHeader from '@components/ProfileHeader';
import UserInfo from '@components/UserInfo';
import UserMenu from '@components/UserMenu';
import Title from '@components/common/Title';
import * as S from '@pages/Profile/Profile.style';
import { shareMineListState } from '@store/shareList';

const Profile = () => {
  return (
    <S.ProfileWrapper>
      <S.UpperWrapper>
        <ProfileHeader />
        <UserInfo />
        <MyMenu />
      </S.UpperWrapper>
      <S.SharesWrapper>
        <Title contentTitle='쉐어중' />
        <PreviewShareListCenterImage
          valueState={shareMineListState({ shareType: 'delivery', mineType: 'entry' })}
        />
        <Title contentTitle='예약중' />
        <PreviewShareListCenterImage
          valueState={shareMineListState({ shareType: 'delivery', mineType: 'writer' })}
        />
      </S.SharesWrapper>
      <UserMenu />
    </S.ProfileWrapper>
  );
};

export default Profile;
