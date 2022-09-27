import { Settings } from 'react-slick';

import { Image } from '@assets/img/index';
import * as S from '@components/Advertisement/Advertisement.style';
import Carousel from '@components/Carousel';
import ImgContainer from '@components/common/ImgContainer';

const settings: Settings = {
  infinite: true,
  speed: 400,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
};

const adsInfo = [
  { id: 0, name: Image.Advert },
  { id: 1, name: Image.AdvertDelivery },
  { id: 2, name: Image.AdvertIngredient },
];

const Advertisement = () => {
  const adsContents = adsInfo.map(({ id, name }) => (
    <S.AdWrapper key={id}>
      <ImgContainer
        imgSrc={name}
        imgTitle={id + name}
        imgWrapperRatio={1.82 / 1}
        imgWrapperWidth='100%'
      />
    </S.AdWrapper>
  ));

  return (
    <S.AdsWrapper>
      <Carousel contents={adsContents} settings={settings} height='100%' />
    </S.AdsWrapper>
  );
};

export default Advertisement;
