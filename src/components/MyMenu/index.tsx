import * as S from '@components/MyMenu/MyMenu.style';
import Icon from '@components/common/Icon';

const MyMenu = () => {
  return (
    <S.Wrapper>
      <S.Menu>
        <Icon iconName='SalesHistory' iconSize='LARGE' />
        <p>판매내역</p>
      </S.Menu>
      <S.Menu>
        <Icon iconName='PurchaseHistory' iconSize='LARGE' />
        <p>구매내역</p>
      </S.Menu>
      <S.Menu>
        <Icon iconName='Heart' iconSize='LARGE' />
        <p>찜한 리스트</p>
      </S.Menu>
    </S.Wrapper>
  );
};

export default MyMenu;
