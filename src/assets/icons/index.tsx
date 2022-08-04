import Form from '@assets/icons/form.svg';
import Heart from '@assets/icons/heart.svg';
import Logo from '@assets/icons/logo.svg';
import NoticeOff from '@assets/icons/noticeOff.svg';
import NoticeOn from '@assets/icons/noticeOn.svg';
import Option from '@assets/icons/option.svg';
import PurchaseHistory from '@assets/icons/purchaseHistory.svg';
import RightArrow from '@assets/icons/rightArrow.svg';
import SalesHistory from '@assets/icons/salesHistory.svg';
import User from '@assets/icons/user.svg';

export const Icons = {
  Logo,
  NoticeOn,
  User,
  Form,
  NoticeOff,
  Option,
  RightArrow,
  SalesHistory,
  PurchaseHistory,
  Heart,
} as const;

export type IconsType = keyof typeof Icons;
