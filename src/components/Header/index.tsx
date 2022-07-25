import styled from 'styled-components';

import Address from '@components/Address';
import * as S from '@components/Header/Header.style';

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
        <span>로그인 </span>
        <span>메뉴</span>
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
