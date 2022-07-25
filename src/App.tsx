import { useRoutes } from 'react-router-dom';

import Header from '@components/Header';
import { routes } from '@router';
import Styles from '@styles';

const App = () => {
  const element = useRoutes(routes);

  return (
    <Styles>
      <Header />
      {element}
    </Styles>
  );
};

export default App;
