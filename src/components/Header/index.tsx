import Address from '@components/Address';
import * as S from '@components/Header/Header.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
const Header = () => {
  return (
    <S.Wrapper>
      <div>
        <Icon iconName={ICON_NAME.LOGO} iconSize={ICON_SIZE.LARGE} />
      </div>
      <div>
        <Address />
      </div>
      <div>
        <Icon iconName={ICON_NAME.NOTICE} iconSize={ICON_SIZE.LARGE} />
      </div>
    </S.Wrapper>
  );
};

export default Header;
