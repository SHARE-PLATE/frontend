import ArrowUp from '@assets/icons/arrowUp.svg';
import Back from '@assets/icons/back.svg';
import Clock from '@assets/icons/clock.svg';
import DeleteCircle from '@assets/icons/deleteCircle.svg';
import Form from '@assets/icons/form.svg';
import Heart from '@assets/icons/heart.svg';
import HeartEmpty from '@assets/icons/heartEmpty.svg';
import Kakao from '@assets/icons/kakao.svg';
import Logo from '@assets/icons/logo.svg';
import NoticeOff from '@assets/icons/noticeOff.svg';
import NoticeOn from '@assets/icons/noticeOn.svg';
import Option from '@assets/icons/option.svg';
import Plus from '@assets/icons/plus.svg';
import PurchaseHistory from '@assets/icons/purchaseHistory.svg';
import RightArrow from '@assets/icons/rightArrow.svg';
import SalesHistory from '@assets/icons/salesHistory.svg';
import SharePlate from '@assets/icons/sharePlate.svg';
import User from '@assets/icons/user.svg';

export const Icons = {
  ArrowUp,
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
  HeartEmpty,
  Back,
  Clock,
  DeleteCircle,
  SharePlate,
  Kakao,
  Plus,
} as const;

export type IconsType = keyof typeof Icons;
