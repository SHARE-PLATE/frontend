import { isMobile } from 'react-device-detect';
import { Settings } from 'react-slick';

import Carousel from '@components/Carousel';
import * as S from '@components/SuggestedSearchTerms/SuggestedSearchTerms.style';
import Icon from '@components/common/Icon';
import { popularKeywordsInfo } from '@constants/popularKeywords';

const settings: Settings = {
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  vertical: true,
  verticalSwiping: true,
};

const SuggestedSearchTerms = () => {
  const popularKeywordsContents = popularKeywordsInfo.map(({ id, name }) => (
    <S.SuggestedItem key={id}>{name}</S.SuggestedItem>
  ));
  return (
    <S.Wrapper>
      <S.SuggestedContainer>
        <S.Contents>
          <S.SuggestedTitle>추천 검색</S.SuggestedTitle>
        </S.Contents>
        <Carousel
          contents={popularKeywordsContents}
          settings={settings}
          height='100%'
          width={isMobile ? '63%' : '80%'}
          isCount={false}
          type='vertical'
        />
        <Icon iconName='ChevronDown' additionalStyle={S.AdditionalImgStyle} />
      </S.SuggestedContainer>
    </S.Wrapper>
  );
};

export default SuggestedSearchTerms;
