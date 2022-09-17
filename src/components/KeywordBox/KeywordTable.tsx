import * as S from '@components/KeywordBox/KeywordBox.style';
import { keywordsType } from '@type/keyword';

const KeywordTable = ({ keywords }: { keywords: keywordsType[] }) => {
  const items = keywords.map(({ id, contents }: keywordsType) => (
    <S.KeywordItem key={id}>{contents}</S.KeywordItem>
  ));

  return (
    <S.Wrapper>
      <S.SubTitle>알림 키워드</S.SubTitle>
      <S.ItemsWrapper>{items}</S.ItemsWrapper>
    </S.Wrapper>
  );
};

export default KeywordTable;
