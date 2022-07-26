import styled from 'styled-components';

import Address from '@components/Address';
import LoginButton from '@components/LoginButton';
import SideBar from '@components/Sidebar';

const Header = () => {
  return (
    <Wrapper>
      <div>
        <span>logo</span>
      </div>
      <div>
        <Address />
      </div>
      <div>
        <span>알림 </span>
        <LoginButton />
        <SideBar />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
