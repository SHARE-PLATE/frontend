import { useNavigate } from 'react-router-dom';

import MyMenu from '@components/MyMenu';
import PreviewShareListCenterImage from '@components/PreviewShareListCenterImage';
import ProfileHeader from '@components/ProfileHeader';
import UserInfo from '@components/UserInfo';
import UserMenu from '@components/UserMenu';
import Title from '@components/common/Title';
import { pathName } from '@constants/pathName';
import { profileMenu } from '@constants/userMenu';
import * as S from '@pages/Profile/Profile.style';
import { shareMineListState } from '@store/shareList';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <S.ProfileWrapper>
      <S.UpperWrapper>
        <ProfileHeader />
        <UserInfo textColor='#fff' />
        <MyMenu />
      </S.UpperWrapper>
      <S.SharesWrapper>
        <Title contentTitle='쉐어중' handleClick={() => navigate(pathName.salesHistory)} />
        <PreviewShareListCenterImage valueState={shareMineListState({ mineType: 'writer' })} />
        <Title contentTitle='예약중' handleClick={() => navigate(pathName.purchaseHistory)} />
        <PreviewShareListCenterImage valueState={shareMineListState({ mineType: 'entry' })} />
      </S.SharesWrapper>
      <UserMenu userMenu={profileMenu} />
    </S.ProfileWrapper>
  );
};

export default Profile;
