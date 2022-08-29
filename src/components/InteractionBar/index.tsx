import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { changeWish, ChangeWishOptionType } from '@api/wish';
import * as S from '@components/InteractionBar/InteractionBar.style';
import ScrollToTopBtn from '@components/ScrollToTopBtn';
import Icon from '@components/common/Icon';
import { CHATTING, PARTICIPATING } from '@constants/words';
import { portalState } from '@store/portal';
import { getPriceType } from '@utils/getPriceType';

type InteractionBarPropsType = {
  isWished?: boolean;
};

const price = 10000;
const originalPrice = 20000;

const InteractionBar = ({ isWished }: InteractionBarPropsType) => {
  const setPortalState = useSetRecoilState(portalState);
  const [isWishedNow, setIsWishedNow] = useState(isWished);
  const { id } = useParams();

  const handleClickWishIcon = async () => {
    const wishControlOption: ChangeWishOptionType = !isWishedNow ? 'enroll' : 'cancel';
    const response = await changeWish({ option: wishControlOption, id });

    if (response?.status === 200) {
      setIsWishedNow(!isWishedNow);
    } else {
      setPortalState('login');
    }
  };

  return (
    <S.Wrapper>
      <S.ScrollToTopBtnWrapper>
        <ScrollToTopBtn />
      </S.ScrollToTopBtnWrapper>
      <S.LeftWrapper>
        <S.IconWrapper isWished={isWishedNow}>
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
