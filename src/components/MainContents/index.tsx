import * as S from '@components/MainContents/MainContents.style';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import { listExample } from '@data/shareList';

const shareDeliveryMention = '함께 음식을 나눠먹어요!';
const shareIngredientMention = '함께 재료를 나눠보아요!';
const moreMention = '더보기';
const mainPageShareListCount = 4;

const MainContents = () => {
  return (
    <S.Wrapper>
      <S.SubTitle>
        {shareDeliveryMention}
        <S.More>{moreMention}</S.More>
      </S.SubTitle>
      <S.PreviewWrapper>
        <PreviewShareListLeftImage data={listExample} count={mainPageShareListCount} />
      </S.PreviewWrapper>
      <S.SubTitle>
        {shareIngredientMention}
        <S.More>{moreMention}</S.More>
      </S.SubTitle>
      <S.PreviewWrapper>
        <PreviewShareListLeftImage data={listExample} count={mainPageShareListCount} />
      </S.PreviewWrapper>
    </S.Wrapper>
  );
};

export default MainContents;
