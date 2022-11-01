import { useNavigate } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';

import * as S from '@components/KeywordBox/KeywordBox.style';
import KeywordTable from '@components/KeywordBox/KeywordTable';
import KeywordTableHeader from '@components/KeywordBox/KeywordTableHeader';
import { pathName } from '@constants/pathName';
import { getKeywordListsData } from '@store/keyword';
import { keywordDataType } from '@type/keyword';

const KeywordBox = () => {
  const navigate = useNavigate();
  const { state, contents } = useRecoilValueLoadable(getKeywordListsData);

  const keywordTableClickHandler = (location: string) =>
    navigate(pathName.addKeyword, {
      state: { regionName: location },
    });

  switch (state) {
    case 'hasValue':
      return (
        <S.Table>
          {contents.map(({ location, keywords }: keywordDataType) => (
            <S.TableBox
              key={location}
              onClick={() => {
                keywordTableClickHandler(location);
              }}
            >
              <KeywordTableHeader location={location} />
              <KeywordTable keywords={keywords} />
            </S.TableBox>
          ))}
        </S.Table>
      );
    case 'loading':
      return <div>로딩 페이지</div>;
    case 'hasError':
      return <div>에러 페이지</div>;
  }
};

export default KeywordBox;
