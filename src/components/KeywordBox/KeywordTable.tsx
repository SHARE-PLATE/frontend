import { useNavigate } from 'react-router-dom';

import * as S from '@components/KeywordBox/KeywordBox.style';
import Icon from '@components/common/Icon';
import { addKeyword } from '@constants/mentions';

interface KeywordTablePropsType {
  location: string;
  keyword: string[];
}

const KeywordTable = ({ location, keyword }: KeywordTablePropsType) => {
  const navigator = useNavigate();

  return (
    <S.Wrapper>
      {keyword.length ? (
        <>
          <S.SubTitle>알림 키워드</S.SubTitle>
          <S.Item>
            {keyword.map((item: string, idx: number) => (
              <S.ItemText key={idx}>{item}</S.ItemText>
            ))}
          </S.Item>
        </>
      ) : (
        <S.FailedContent>
          <Icon
            iconName='Plus'
            handleClick={() => navigator('./add-keyword', { state: location })}
          />
          <S.FailedText>{addKeyword}</S.FailedText>
        </S.FailedContent>
      )}
    </S.Wrapper>
  );
};

export default KeywordTable;
