import * as S from '@components/Ads/Ads.style';
import Carousel from '@components/Carousel';

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const adsInfo = [
  { id: 0, name: '0번입니다' },
  { id: 1, name: '1번입니다' },
  { id: 2, name: '2번입니다' },
  { id: 3, name: '3번입니다' },
  { id: 4, name: '4번입니다' },
  { id: 5, name: '5번입니다' },
];

const Ads = () => {
  const adsContents = adsInfo.map(({ id, name }) => (
    <S.AdWrapper key={id}>
      <div>test</div>
      <div>{name}</div>
    </S.AdWrapper>
  ));

  return <Carousel contents={adsContents} settings={settings} height={30} />;
};

export default Ads;
