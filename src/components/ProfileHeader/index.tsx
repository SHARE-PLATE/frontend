import * as S from '@components/ProfileHeader/ProfileHeader.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
const ProfileHeader = () => {
  return (
    <S.Wrapper>
      <S.Title>마이메뉴</S.Title>
      <S.Icons>
        <Icon iconName={ICON_NAME.NOTICE_OFF} iconSize={ICON_SIZE.LARGE} />
        <Icon iconName={ICON_NAME.OPTION} iconSize={ICON_SIZE.LARGE} />
      </S.Icons>
    </S.Wrapper>
  );
};
export default ProfileHeader;
