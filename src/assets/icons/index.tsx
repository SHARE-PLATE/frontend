import Back from '@assets/icons/back.svg';
import Clock from '@assets/icons/clock.svg';
import DeleteCircle from '@assets/icons/deleteCircle.svg';
import Form from '@assets/icons/form.svg';
import Heart from '@assets/icons/heart.svg';
import Kakao from '@assets/icons/kakao.svg';
import Logo from '@assets/icons/logo.svg';
import NoticeOff from '@assets/icons/noticeOff.svg';
import NoticeOn from '@assets/icons/noticeOn.svg';
import Option from '@assets/icons/option.svg';
import PurchaseHistory from '@assets/icons/purchaseHistory.svg';
import RightArrow from '@assets/icons/rightArrow.svg';
import SalesHistory from '@assets/icons/salesHistory.svg';
import SharePlate from '@assets/icons/sharePlate.svg';
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
  Back,
  Clock,
  DeleteCircle,
<<<<<<< HEAD
  SharePlate,
  Kakao,
=======
>>>>>>> 6881383 (feat : 필요한 icon svg 추가)
} as const;

export type IconsType = keyof typeof Icons;
