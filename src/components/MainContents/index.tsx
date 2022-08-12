import LoginArea from '@components/LoginArea';
import * as S from '@components/MainContents/MainContents.style';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import Title from '@components/common/Title';
import { shareDeliveryMention, shareIngredientMention } from '@constants/mentions';
import { listExample } from '@data/shareList';

const mainPageShareListCount = 4;
const isLogin = false;

const MainContents = () => {
  return (
    <S.Wrapper>
      <Title contentTitle={shareDeliveryMention} handleClick={() => true} size='LARGE' />
      <S.PreviewWrapper>
        <PreviewShareListLeftImage data={listExample} count={mainPageShareListCount} />
      </S.PreviewWrapper>
      <Title contentTitle={shareIngredientMention} handleClick={() => true} size='LARGE' />
      <S.PreviewWrapper>
        <PreviewShareListLeftImage data={listExample} count={mainPageShareListCount} />
      </S.PreviewWrapper>
      {!isLogin && <LoginArea />}
    </S.Wrapper>
  );
};

export default MainContents;
