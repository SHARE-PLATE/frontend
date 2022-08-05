import Address from '@components/Address';
<<<<<<< HEAD:src/components/MainHeader/index.tsx
import * as S from '@components/MainHeader/MainHeader.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';

const MainHeader = () => {
=======
import * as S from '@components/Header/Header.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
const Header = () => {
>>>>>>> 013f609ed2997f37385d3cf5436b19d6dfacc6ee:src/components/Header/index.tsx
  return (
    <S.Wrapper>
      <div>
        <Icon iconName={ICON_NAME.LOGO} iconSize={ICON_SIZE.LARGE} />
      </div>
      <div>
        <Address />
      </div>
      <div>
        <Icon iconName={ICON_NAME.NOTICE_ON} iconSize={ICON_SIZE.LARGE} />
      </div>
    </S.Wrapper>
  );
};

<<<<<<< HEAD:src/components/MainHeader/index.tsx
export default MainHeader;
=======
export default Header;
>>>>>>> 013f609ed2997f37385d3cf5436b19d6dfacc6ee:src/components/Header/index.tsx
