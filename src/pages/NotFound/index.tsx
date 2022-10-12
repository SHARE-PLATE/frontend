import ErrorWithButtons from '@components/ErrorWithButtons';
import { wrongApproachMEntion } from '@constants/mentions';

const NotFound = () => {
  return <ErrorWithButtons mention={wrongApproachMEntion} />;
};

export default NotFound;
