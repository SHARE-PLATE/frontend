import ArrowUp from '@assets/icons/arrowUp.svg';
import Back from '@assets/icons/back.svg';
import BriefCase from '@assets/icons/briefCase.svg';
import Camera from '@assets/icons/camera.svg';
import Chat from '@assets/icons/chat.svg';
import ChatFill from '@assets/icons/chatFill.svg';
import CheckCircle from '@assets/icons/checkCircle.svg';
import CheckCircleColor from '@assets/icons/checkCircleColor.svg';
import ChevronDown from '@assets/icons/chevronDown.svg';
import Clock from '@assets/icons/clock.svg';
import CountDown from '@assets/icons/countDown.svg';
import CountUp from '@assets/icons/countUp.svg';
import DeleteCircle from '@assets/icons/deleteCircle.svg';
import DotsVertical from '@assets/icons/dotsVertical.svg';
import Form from '@assets/icons/form.svg';
import Heart from '@assets/icons/heart.svg';
import HeartEmpty from '@assets/icons/heartEmpty.svg';
import Home from '@assets/icons/home.svg';
import HomeAdd from '@assets/icons/homeAdd.svg';
import HomeFill from '@assets/icons/homeFill.svg';
import Kakao from '@assets/icons/kakao.svg';
import LocationMarker from '@assets/icons/locationMarker.svg';
import Logo from '@assets/icons/logo.svg';
import Map from '@assets/icons/map.svg';
import NoticeOff from '@assets/icons/noticeOff.svg';
import NoticeOn from '@assets/icons/noticeOn.svg';
import Option from '@assets/icons/option.svg';
import PaperAirplane from '@assets/icons/paperAirplane.svg';
import Plus from '@assets/icons/plus.svg';
import PurchaseHistory from '@assets/icons/purchaseHistory.svg';
import RightArrow from '@assets/icons/rightArrow.svg';
import SalesHistory from '@assets/icons/salesHistory.svg';
import Search from '@assets/icons/search.svg';
import SearchNav from '@assets/icons/searchNav.svg';
import SearchNavFill from '@assets/icons/searchNavFill.svg';
import SearchSmall from '@assets/icons/searchSmall.svg';
import Share from '@assets/icons/share.svg';
import ShareFill from '@assets/icons/shareFill.svg';
import SharePlate from '@assets/icons/sharePlate.svg';
import Upload from '@assets/icons/upload.svg';
import User from '@assets/icons/user.svg';
import UserNav from '@assets/icons/userNav.svg';
import UserNavFill from '@assets/icons/userNavFill.svg';
import X_Icon from '@assets/icons/x_icon.svg';

export const Icons = {
  CheckCircleColor,
  BriefCase,
  HomeAdd,
  SearchSmall,
  LocationMarker,
  ChatFill,
  SearchNavFill,
  HomeFill,
  ShareFill,
  UserNavFill,
  SearchNav,
  UserNav,
  Chat,
  Share,
  Home,
  DotsVertical,
  PaperAirplane,
  ArrowUp,
  Map,
  Logo,
  Upload,
  ChevronDown,
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
  Camera,
  Search,
  CheckCircle,
  X_Icon,
  CountUp,
  CountDown,
} as const;

export type IconsType = keyof typeof Icons;
