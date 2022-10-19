import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';
import { Settings } from 'react-slick';
import { useRecoilState, useSetRecoilState } from 'recoil';

import Carousel from '@components/Carousel';
import * as S from '@components/SuggestedSearchTerms/SuggestedSearchTerms.style';
import Icon from '@components/common/Icon';
import { popularKeywordsInfo } from '@constants/popularKeywords';
import { SEARCH_RECENT } from '@constants/words';
import { currentMapKey, searchRecent } from '@store/localStorage';
import { getMonthDate } from '@utils/getTime';
import { setLocalStorageInfo } from '@utils/localStorage';
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
  const navigate = useNavigate();
  const setCurrentMapKey = useSetRecoilState(currentMapKey);
  const [recentListInfoMap, setRecentListInfoMap] = useRecoilState(searchRecent);

  const handleClickProducts = (itemIdx: number) => {
    const curText = popularKeywordsContents[itemIdx].props.children;

    recentListInfoMap.set(curText, { name: curText, date: getMonthDate() });

    setLocalStorageInfo({ key: SEARCH_RECENT, info: [...recentListInfoMap] });
    setRecentListInfoMap(() => recentListInfoMap);
    setCurrentMapKey(curText);
    navigate('/search-share');
  };

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
          onClickHandler={handleClickProducts}
        />
        <Icon iconName='SearchThick' additionalStyle={S.AdditionalImgStyle} />
      </S.SuggestedContainer>
    </S.Wrapper>
  );
};

export default SuggestedSearchTerms;
