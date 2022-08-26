import { useSetRecoilState } from 'recoil';

import * as S from '@components/InteractionBar/InteractionBar.style';
import ScrollToTopBtn from '@components/ScrollToTopBtn';
import Icon from '@components/common/Icon';
import { CHATTING, PARTICIPATING } from '@constants/words';
import { portalState } from '@store/portal';
import { getPriceType } from '@utils/getPriceType';
import { getLocalStorageInfo } from '@utils/localStorage';

const price = 10000;
const originalPrice = 20000;

const InteractionBar = () => {
  const token = getLocalStorageInfo('access-token');
  const isWished = true;
  const setPortalState = useSetRecoilState(portalState);

  const handleClickWishIcon = () => {
    if (!token) setPortalState('login');
  };

  return (
    <S.Wrapper>
      <S.ScrollToTopBtnWrapper>
        <ScrollToTopBtn />
      </S.ScrollToTopBtnWrapper>
      <S.LeftWrapper>
        <S.IconWrapper isWished={isWished}>
          <Icon iconName='HeartEmpty' handleClick={handleClickWishIcon} />
        </S.IconWrapper>
        <S.PriceWrapper>
          <div>{getPriceType({ price, isUnit: true })}</div>
          <div>{getPriceType({ price: originalPrice, isUnit: true })}</div>
        </S.PriceWrapper>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.Button>{CHATTING}</S.Button>
        <S.Button>{PARTICIPATING}</S.Button>
      </S.RightWrapper>
    </S.Wrapper>
  );
};

export default InteractionBar;
