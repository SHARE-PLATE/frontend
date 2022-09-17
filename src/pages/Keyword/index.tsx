import KeywordBox from '@components/KeywordBox';
import BackTitleHeader from '@components/common/BackTitleHeader';
import * as S from '@pages/Keyword/Keyword.style';

const Keyword = () => {
  return (
    <S.Wrapper>
      <BackTitleHeader title='키워드 알림' />
      <S.Header>주소 키워드</S.Header>
      <KeywordBox />
    </S.Wrapper>
  );
};

export default Keyword;
