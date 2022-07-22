import { useRoutes } from 'react-router-dom';

import { routes } from '@router';
import Styles from '@styles';

const App = () => {
  const element = useRoutes(routes);

  return <Styles>{element}</Styles>;
};

export default App;
