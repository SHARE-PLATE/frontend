import { useRoutes } from 'react-router-dom';

import NavigationBar from '@components/NavigationBar';
import { Mobile } from '@query/mediaQuery';
import { routes } from '@router';
import Styles from '@styles';

const App = () => {
  const element = useRoutes(routes);

  return (
    <div className='App'>
      <Styles>
        {element}
        <Mobile>
          <NavigationBar />
        </Mobile>
      </Styles>
    </div>
  );
};

export default App;
