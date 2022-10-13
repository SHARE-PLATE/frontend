import { useRoutes } from 'react-router-dom';

import NavigationBar from '@components/NavigationBar';
import useChatAlarm from '@hooks/useChatAlarm';
import useCheckIsLogin from '@hooks/useCheckIsLogin';
import useNoticeAlarm from '@hooks/useNoticeAlarm';
import AddressPortal from '@portals/AddressPortal';
import KeywordAddressPortal from '@portals/KeywordAddressPortal';
import LoginPortal from '@portals/LoginPortal';
import OptionPortal from '@portals/OptionPortal';
import SearchPortal from '@portals/SearchPortal';
import { routes } from '@router';
import Styles from '@styles';

const App = () => {
  const element = useRoutes(routes);
  const noticeAlarm = useNoticeAlarm();
  const chatAlarm = useChatAlarm();

  useCheckIsLogin();
  noticeAlarm();
  chatAlarm();

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
