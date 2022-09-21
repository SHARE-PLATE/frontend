import NoticeIcon from '@components/NoticeIcon';
import * as S from '@components/ProfileHeader/ProfileHeader.style';
import Icon from '@components/common/Icon';

const ProfileHeader = () => {
  return (
    <S.Wrapper>
      <S.Title>마이메뉴</S.Title>
      <S.Icons>
        <NoticeIcon noticeOnIcon='NoticeOn' noticeOffIcon='NoticeOff' iconSize={1.5} />
        <Icon iconName='Option' iconSize={1.5} />
      </S.Icons>
    </S.Wrapper>
  );
};

export default ProfileHeader;
