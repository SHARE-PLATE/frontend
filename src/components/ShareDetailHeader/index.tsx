import { useNavigate } from 'react-router-dom';
import { Settings } from 'react-slick';
import { v4 as getRandomKey } from 'uuid';

import Carousel from '@components/Carousel';
import ImgContainer from '@components/ImgContainer';
import { RemainedTime } from '@components/RemainedTime';
import * as S from '@components/ShareDetailHeader/ShareDetailHeader.style';
import Icon from '@components/common/Icon';

interface ShareDetailHeaderPropsType {
  imageUrls: string[];
  appointmentDateTime: string;
}

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

const ShareDetailHeader = ({ imageUrls, appointmentDateTime }: ShareDetailHeaderPropsType) => {
  const navigate = useNavigate();
  const handleClickGoBack = () => navigate(-1);

  const imgCarouselContents = imageUrls.map((imgUrl: string) => (
    <ImgContainer
      key={getRandomKey()}
      imgSrc={imgUrl}
      imgTitle={imgUrl}
      imgWrapperWidth='100%'
      imgWrapperRatio={S.ImgContainerRatio}
    />
  ));

  return (
    <S.Wrapper>
      <S.IconsWrapper>
        <Icon iconName='Back' handleClick={handleClickGoBack} />
        <Icon iconName='Upload' />
      </S.IconsWrapper>
      <S.ImageContainer>
        <Carousel contents={imgCarouselContents} settings={settings} height='100%' />
        <RemainedTime
          targetTime={appointmentDateTime}
          position={{
            left: '1rem',
            bottom: '1rem',
          }}
        />
      </S.ImageContainer>
    </S.Wrapper>
  );
};

export default ShareDetailHeader;
