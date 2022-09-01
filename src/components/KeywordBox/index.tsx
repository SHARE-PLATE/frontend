import * as S from '@components/KeywordBox/KeywordBox.style';
import KeywordTable from '@components/KeywordBox/KeywordTable';
import KeywordTableHeader from '@components/KeywordBox/KeywordTableHeader';
import { keywordExample } from '@data/keyword';
const KeywordBox = () => {
  const dataExample = keywordExample;
  return (
    <S.Table>
      {dataExample.map(({ location, keyword }, idx) => (
        <S.TableBox key={idx}>
          <KeywordTableHeader location={location} />
          <KeywordTable location={location} keyword={keyword} />
        </S.TableBox>
      ))}
    </S.Table>
  );
};

export default KeywordBox;
