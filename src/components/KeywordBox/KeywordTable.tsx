import * as S from '@components/KeywordBox/KeywordBox.style';
import { keywordsType } from '@type/keyword';

const KeywordTable = ({ keywords }: { keywords: keywordsType[] }) => {
  return (
    <S.Wrapper>
      <S.SubTitle>알림 키워드</S.SubTitle>
      <S.Item>
        {keywords.map(({ id, contents }: keywordsType) => (
          <S.ItemText key={id}>{contents}</S.ItemText>
        ))}
      </S.Item>
    </S.Wrapper>
  );
};

export default KeywordTable;
