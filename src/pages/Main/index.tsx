import Ads from '@components/Ads';
import MainContents from '@components/MainContents';
import MainHeader from '@components/MainHeader';
import PreviewShareListLongImage from '@components/PreviewShareListLongImage';
import * as S from '@pages/Main/Main.style';

const Main = () => {
  return (
    <S.MainWrapper>
      <S.MainHeaderWrapper>
        <MainHeader />
        <Ads />
        <PreviewShareListLongImage />
      </S.MainHeaderWrapper>
      <div>
        <MainContents />
      </div>
    </S.MainWrapper>
  );
};

export default Main;
