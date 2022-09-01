import * as S from '@components/RegisteredKeyword/RegisteredKeyword.style';
import Icon from '@components/common/Icon';
import { keyword } from '@data/keyword';
const RegisteredKeyword = () => {
  const exampleKeyword = keyword;

  return (
    <div>
      <S.SubHeader>
        등록된 키워드 {exampleKeyword.length} <S.MaxKeyword>/ 10</S.MaxKeyword>
      </S.SubHeader>
      <S.ContentContainer>
        {exampleKeyword.map((item) => (
          <S.ContentBox key={item}>
            <S.ContentItem>{item}</S.ContentItem>
            <Icon iconName='X_Icon' />
          </S.ContentBox>
        ))}
      </S.ContentContainer>
    </div>
  );
};

export default RegisteredKeyword;
