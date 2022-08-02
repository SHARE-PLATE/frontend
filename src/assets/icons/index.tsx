import Form from '@assets/icons/form.svg';
import Logo from '@assets/icons/logo.svg';
import Notice from '@assets/icons/notice.svg';
import User from '@assets/icons/user.svg';

export const Icons = {
  Logo,
  Notice,
  User,
  Form,
} as const;

export type IconsType = keyof typeof Icons;
