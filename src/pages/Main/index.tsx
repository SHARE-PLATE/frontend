import Ads from '@components/Ads';
import MainHeader from '@components/MainHeader';
import * as S from '@pages/Main/Main.style';

const Main = () => {
  return (
    <S.MainWrapper>
      <S.MainHeaderWrapper>
        <MainHeader />
        <Ads />
      </S.MainHeaderWrapper>
    </S.MainWrapper>
  );
};

export default Main;
