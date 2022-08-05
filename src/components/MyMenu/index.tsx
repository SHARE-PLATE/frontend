import * as S from '@components/MyMenu/MyMenu.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';

const MyMenu = () => {
  return (
    <S.Wrapper>
      <S.Menu>
        <Icon iconName={ICON_NAME.SALES_HISTORY} iconSize={ICON_SIZE.LARGE} />
        <S.Content>판매내역</S.Content>
      </S.Menu>
      <S.Menu>
        <Icon iconName={ICON_NAME.PURCHASE_HISTORY} iconSize={ICON_SIZE.LARGE} />
        <S.Content>구매내역</S.Content>
      </S.Menu>
      <S.Menu>
        <Icon iconName={ICON_NAME.HEART} iconSize={ICON_SIZE.LARGE} />
        <S.Content>찜한 리스트</S.Content>
      </S.Menu>
    </S.Wrapper>
  );
};

export default MyMenu;
