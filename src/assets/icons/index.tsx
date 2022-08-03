import Form from '@assets/icons/form.svg';
import Logo from '@assets/icons/logo.svg';
import NoticeOff from '@assets/icons/noticeOff.svg';
import NoticeOn from '@assets/icons/noticeOn.svg';
import User from '@assets/icons/user.svg';

export const Icons = {
  Logo,
  NoticeOn,
  User,
  Form,
  NoticeOff,
} as const;

export type IconsType = keyof typeof Icons;
