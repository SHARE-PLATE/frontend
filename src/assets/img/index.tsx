import Advert from '@assets/img/advert.png';
import AdvertDelivery from '@assets/img/advertDelivery.png';
import AdvertIngredient from '@assets/img/advertIngredient.png';

export const Image = {
  AdvertIngredient,
  AdvertDelivery,
  Advert,
} as const;

export type ImgType = keyof typeof Image;
