import { useRoutes } from 'react-router-dom';

import BottomBar from '@components/BottomBar';
import Login from '@components/Login';
import Search from '@components/Search';
import { Mobile } from '@query/mediaQuery';
import { routes } from '@router';
import Styles from '@styles';

const App = () => {
  const element = useRoutes(routes);
  console.log('https 테스트!');

  return (
    <div className='App'>
      <Styles>
        {element}
        <Login />
        <Search />
        <Mobile>
          <BottomBar />
        </Mobile>
      </Styles>
    </div>
  );
};

export default App;
