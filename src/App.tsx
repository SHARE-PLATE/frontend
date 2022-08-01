import { useRoutes } from 'react-router-dom';

import Header from '@components/Header';
import NavigationBar from '@components/NavigationBar';
import { Mobile } from '@query/mediaQuery';
import { routes } from '@router';
import Styles from '@styles';

const App = () => {
  const element = useRoutes(routes);

  return (
    <Styles>
      <Header />
      {element}
      <Mobile>
        <NavigationBar />
      </Mobile>
    </Styles>
  );
};

export default App;
