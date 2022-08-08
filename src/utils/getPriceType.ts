type GetPriceParamsType = {
  price?: number;
  isUnit?: boolean;
};

const UNIT = '원';

export const getPriceType = ({ price, isUnit }: GetPriceParamsType) => {
  const unit = isUnit ? UNIT : '';
  const stringifiedPrice = price ? price.toLocaleString('ko-KR') : 0;
  return stringifiedPrice + unit;
};
