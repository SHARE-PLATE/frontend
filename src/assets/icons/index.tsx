import AddDelivery from '@assets/icons/addDelivery.svg';
import AddIngredient from '@assets/icons/addIngredient.svg';
import AddKeyword from '@assets/icons/addKeyword.svg';
import AddressHome from '@assets/icons/addressHome.svg';
import AddressHomeFill from '@assets/icons/addressHomeFill.svg';
import ArrowUp from '@assets/icons/arrowUp.svg';
import Back from '@assets/icons/back.svg';
import Bookmark from '@assets/icons/bookmark.svg';
import BriefCase from '@assets/icons/briefCase.svg';
import Calendar from '@assets/icons/calendar.svg';
import Camera from '@assets/icons/camera.svg';
import CameraActive from '@assets/icons/cameraActive.svg';
import Chat from '@assets/icons/chat.svg';
import ChatFill from '@assets/icons/chatFill.svg';
import CheckCircle from '@assets/icons/checkCircle.svg';
import CheckCircleColor from '@assets/icons/checkCircleColor.svg';
import ChevronDown from '@assets/icons/chevronDown.svg';
import ChevronLeft from '@assets/icons/chevronLeft.svg';
import ChevronRight from '@assets/icons/chevronRight.svg';
import Clock from '@assets/icons/clock.svg';
import ClockPicture from '@assets/icons/clockPicture.svg';
import CountDown from '@assets/icons/countDown.svg';
import CountUp from '@assets/icons/countUp.svg';
import DeleteCircle from '@assets/icons/deleteCircle.svg';
import DotsVertical from '@assets/icons/dotsVertical.svg';
import Flag from '@assets/icons/flag.svg';
import Form from '@assets/icons/form.svg';
import FormClose from '@assets/icons/formClose.svg';
import Hamburger from '@assets/icons/hamburger.svg';
import HashDelete from '@assets/icons/hashDelete.svg';
import Heart from '@assets/icons/heart.svg';
import HeartEmpty from '@assets/icons/heartEmpty.svg';
import HeartNoFill from '@assets/icons/heartNoFill.svg';
import Home from '@assets/icons/home.svg';
import HomeAdd from '@assets/icons/homeAdd.svg';
import HomeFill from '@assets/icons/homeFill.svg';
import ImgDelete from '@assets/icons/imgDelete.svg';
import Kakao from '@assets/icons/kakao.svg';
import KebabMenu from '@assets/icons/kebabMenu.svg';
import LocationMarker from '@assets/icons/locationMarker.svg';
import Logo from '@assets/icons/logo.svg';
import LogoWithText from '@assets/icons/logoWithText.svg';
import Map from '@assets/icons/map.svg';
import MeatPicture from '@assets/icons/meatPicture.svg';
import Microphone from '@assets/icons/microphone.svg';
import NoticeActivityEmpty from '@assets/icons/noticeActivityEmpty.svg';
import NoticeActivityFull from '@assets/icons/noticeActivityFull.svg';
import NoticeActivityLogo from '@assets/icons/noticeActivityLogo.svg';
import NoticeOff from '@assets/icons/noticeOff.svg';
import NoticeOn from '@assets/icons/noticeOn.svg';
import OffClickBar from '@assets/icons/offClickBar.svg';
import OnClickBar from '@assets/icons/onClickBar.svg';
import Option from '@assets/icons/option.svg';
import PaperAirplane from '@assets/icons/paperAirplane.svg';
import PersonImaging from '@assets/icons/personImaging.svg';
import PizzaPicture from '@assets/icons/pizzaPicture.svg';
import Plus from '@assets/icons/plus.svg';
import PlusBold from '@assets/icons/plusBold.svg';
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
  ChevronLeft,
  Calendar,
  NoticeActivityLogo,
  AddressHomeFill,
  HeartNoFill,
  KebabMenu,
  AddressHome,
  PlusBold,
  NoticeActivityEmpty,
  NoticeActivityFull,
  Bookmark,
  Flag,
  Microphone,
  PersonImaging,
  PizzaPicture,
  LogoWithText,
  MeatPicture,
  ClockPicture,
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
  FormClose,
  NoticeOff,
  Option,
  RightArrow,
  SalesHistory,
  PurchaseHistory,
  Heart,
  HeartEmpty,
  CameraActive,
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
  ChevronRight,
  ImgDelete,
  AddDelivery,
  AddIngredient,
  AddKeyword,
  Hamburger,
  OffClickBar,
  OnClickBar,
  HashDelete,
} as const;

export type IconsType = keyof typeof Icons;
