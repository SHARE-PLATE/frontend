import LoginArea from '@components/LoginArea';
import * as S from '@components/MainContents/MainContents.style';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import { shareDeliveryMention, shareIngredientMention } from '@constants/mentions';
import { SHOW_MORE } from '@constants/words';
import { listExample } from '@data/shareList';

const mainPageShareListCount = 4;
const isLogin = false;

const MainContents = () => {
  return (
    <S.Wrapper>
      <S.SubTitle>
        {shareDeliveryMention}
        <S.More>{SHOW_MORE}</S.More>
      </S.SubTitle>
      <S.PreviewWrapper>
        <PreviewShareListLeftImage data={listExample} count={mainPageShareListCount} />
      </S.PreviewWrapper>
      <S.SubTitle>
        {shareIngredientMention}
        <S.More>{SHOW_MORE}</S.More>
      </S.SubTitle>
      <S.PreviewWrapper>
        <PreviewShareListLeftImage data={listExample} count={mainPageShareListCount} />
      </S.PreviewWrapper>
      {!isLogin && <LoginArea />}
    </S.Wrapper>
  );
};

export default MainContents;
