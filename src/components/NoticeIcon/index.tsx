import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { IconsType } from '@assets/icons';
import * as S from '@components/NoticeIcon/NoticeIcon.style';
import Icon from '@components/common/Icon';
import { IconSizeType } from '@components/common/Icon/Icon.style';
import { pathName } from '@constants/pathName';
import { newNoticeState } from '@store/notice';

type NoticeIconPropsType = {
  noticeOnIcon: IconsType;
  noticeOffIcon: IconsType;
  iconSize?: IconSizeType;
};

const NoticeIcon = ({ noticeOnIcon, noticeOffIcon, iconSize }: NoticeIconPropsType) => {
  const newNotice = useRecoilValue(newNoticeState);
  const navigate = useNavigate();

  return (
    <S.Wrapper onClick={() => navigate(pathName.notice)}>
      <Icon iconName={newNotice ? noticeOnIcon : noticeOffIcon} iconSize={iconSize} />
    </S.Wrapper>
  );
};

export default NoticeIcon;
