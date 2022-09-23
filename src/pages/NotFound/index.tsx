import HomeLogin from '@components/HomeLogin';
import { wrongApproachMEntion } from '@constants/mentions';

const NotFound = () => {
  return <HomeLogin mention={wrongApproachMEntion} />;
};

export default NotFound;
