type GetPriceParamsType = {
  price: number | string;
  isUnit?: boolean;
};

const UNIT = '원';

export const getPriceType = ({ price, isUnit }: GetPriceParamsType) => {
  let inputPrice = price;

  if (typeof inputPrice === 'string') inputPrice = Number(inputPrice.replaceAll(',', ''));

  const unit = isUnit ? UNIT : '';
  const stringifiedPrice = inputPrice ? inputPrice.toLocaleString('ko-KR') : 0;
  return stringifiedPrice + unit;
};
