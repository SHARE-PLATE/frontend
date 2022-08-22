import * as S from '@components/common/Price/Price.style';
import { getPriceType } from '@utils/getPriceType';

type PricePropsType = {
  price: number;
  originalPrice: number;
};

const Price = ({ price, originalPrice }: PricePropsType) => {
  return (
    <S.Wrapper>
      <div>{getPriceType({ price, isUnit: true })}</div>
      <div>{getPriceType({ price: originalPrice, isUnit: true })}</div>
    </S.Wrapper>
  );
};
export default Price;
