import { useNavigate } from 'react-router-dom';

import * as S from '@components/MyMenu/MyMenu.style';
import Icon from '@components/common/Icon';

const MyMenu = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Menu onClick={() => navigate('./sales-history')}>
        <Icon iconName='SalesHistory' iconSize='LARGE' />
        <p>판매내역</p>
      </S.Menu>
      <S.Menu onClick={() => navigate('./purchase-history')}>
        <Icon iconName='PurchaseHistory' iconSize='LARGE' />
        <p>구매내역</p>
      </S.Menu>
      <S.Menu onClick={() => navigate('./wish-list')}>
        <Icon iconName='Heart' iconSize='LARGE' />
        <p>찜한 리스트</p>
      </S.Menu>
    </S.Wrapper>
  );
};

export default MyMenu;
