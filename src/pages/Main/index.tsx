import Advertisement from '@components/Advertisement';
import MainContents from '@components/MainContents';
import MainHeader from '@components/MainHeader';
import PreviewShareListLongImage from '@components/PreviewShareListLongImage';
import SuggestedSearchTerms from '@components/SuggestedSearchTerms';
import * as S from '@pages/Main/Main.style';

const Main = () => {
  return (
    <S.MainWrapper>
      <S.MainHeaderWrapper>
        <S.HeaderBarWrapper>
          <MainHeader />
        </S.HeaderBarWrapper>
        <Advertisement />
        <SuggestedSearchTerms />
        <PreviewShareListLongImage />
      </S.MainHeaderWrapper>
      <MainContents />
    </S.MainWrapper>
  );
};

export default Main;
