import Address from '@components/Address';
import * as S from '@components/MainHeader/MainHeader.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';

const MainHeader = () => {
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

export default MainHeader;
