import HomeLogin from '@components/HomeLogin';
import { wrongApproachMEntion } from '@constants/mentions';

const Error = () => {
  return <HomeLogin mention={wrongApproachMEntion} />;
};

export default Error;
