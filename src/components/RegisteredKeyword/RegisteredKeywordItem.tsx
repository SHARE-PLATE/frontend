import * as S from '@components/RegisteredKeyword/RegisteredKeyword.style';
import Icon from '@components/common/Icon';

interface RegisteredKeywordItemPropsType {
  id: number;
  contents: string;
  handlerFnc: (id: number) => Promise<false | undefined>;
}

const RegisteredKeywordItem = ({ id, contents, handlerFnc }: RegisteredKeywordItemPropsType) => {
  return (
    <S.KeywordItem>
      {contents}
      <S.IconWrapper>
        <Icon iconName='X_Icon' iconSize={0.5} handleClick={() => handlerFnc(id)} />
      </S.IconWrapper>
    </S.KeywordItem>
  );
};

export default RegisteredKeywordItem;
