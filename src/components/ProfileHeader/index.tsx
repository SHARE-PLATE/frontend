import * as S from '@components/ProfileHeader/ProfileHeader.style';
import Icon from '@components/common/Icon';

const ProfileHeader = () => {
  return (
    <S.Wrapper>
      <S.Title>마이메뉴</S.Title>
      <S.Icons>
        <Icon iconName='NoticeOff' iconSize='LARGE' />
        <Icon iconName='Option' iconSize='LARGE' />
      </S.Icons>
    </S.Wrapper>
  );
};

export default ProfileHeader;
