import ErrorWithButtons from '@components/ErrorWithButtons';
import { wrongApproachMEntion } from '@constants/mentions';

const Error = () => {
  return <ErrorWithButtons mention={wrongApproachMEntion} />;
};

export default Error;
