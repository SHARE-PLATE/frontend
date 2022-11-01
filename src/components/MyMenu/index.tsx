import { useNavigate } from 'react-router-dom';

import * as S from '@components/MyMenu/MyMenu.style';
import Icon from '@components/common/Icon';
import { pathName } from '@constants/pathName';

const MyMenu = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Menu onClick={() => navigate(pathName.salesHistory)}>
        <Icon iconName='SalesHistory' iconSize='LARGE' />
        <p>판매내역</p>
      </S.Menu>
      <S.Menu onClick={() => navigate(pathName.purchaseHistory)}>
        <Icon iconName='PurchaseHistory' iconSize='LARGE' />
        <p>구매내역</p>
      </S.Menu>
      <S.Menu onClick={() => navigate(pathName.wishList)}>
        <Icon iconName='Heart' iconSize={1.8} />
        <p>찜한 리스트</p>
      </S.Menu>
    </S.Wrapper>
  );
};

export default MyMenu;
