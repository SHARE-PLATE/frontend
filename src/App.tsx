import { useRoutes } from 'react-router-dom';

import AddressPortal from '@components/AddressPortal';
import KeywordAddressPortal from '@components/KeywordAddressPortal';
import LoginPortal from '@components/LoginPortal';
import NavigationBar from '@components/NavigationBar';
import OptionPortal from '@components/OptionPortal';
import SearchPortal from '@components/SearchPortal';
import { routes } from '@router';
import Styles from '@styles';

const App = () => {
  const element = useRoutes(routes);

  return (
    <div className='App'>
      <Styles>
        {element}
        <LoginPortal />
        <SearchPortal />
        <AddressPortal />
        <OptionPortal />
        <KeywordAddressPortal />
        <NavigationBar />
      </Styles>
    </div>
  );
};

export default App;
