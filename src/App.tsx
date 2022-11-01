import { useRoutes } from 'react-router-dom';

import BottomMessage from '@components/BottomMessage';
import NavigationBar from '@components/NavigationBar';
import SelectModal from '@components/common/SelectModal';
import useCheckIsLogin from '@hooks/useCheckIsLogin';
import AddressPortal from '@portals/AddressPortal';
import KeywordAddressPortal from '@portals/KeywordAddressPortal';
import LoginPortal from '@portals/LoginPortal';
import OptionPortal from '@portals/OptionPortal';
import SearchPortal from '@portals/SearchPortal';
import { routes } from '@router';
import useConnectSocket from '@socket/useConnectSocket';
import Styles from '@styles';
import { setAppHeight } from '@styles/GlobalStyle';

const App = () => {
  const element = useRoutes(routes);
  const connectSocket = useConnectSocket();

  useCheckIsLogin();
  connectSocket();
  setAppHeight();

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
        <BottomMessage />
        <SelectModal />
      </Styles>
    </div>
  );
};

export default App;
