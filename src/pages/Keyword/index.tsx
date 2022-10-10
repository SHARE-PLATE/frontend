import KeywordBox from '@components/KeywordBox';
import BackTitleHeader from '@components/common/BackTitleHeader';
import { ADDRESS_KEYWORD, NOTICE_KEYWORD } from '@constants/words';
import * as S from '@pages/Keyword/Keyword.style';

const Keyword = () => {
  return (
    <S.Wrapper>
      <BackTitleHeader title={NOTICE_KEYWORD} />
      <S.Header>{ADDRESS_KEYWORD}</S.Header>
      <KeywordBox />
    </S.Wrapper>
  );
};

export default Keyword;
