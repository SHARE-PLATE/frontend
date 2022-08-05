import * as S from '@components/common/Title/Title.style';
interface TitlePropsType {
  contentTitle: string;
  isContent?: boolean;
}

const Title = ({ contentTitle, isContent = false }: TitlePropsType) => {
  return (
    <S.TitleContainer>
      <S.TitleHeader>{contentTitle}</S.TitleHeader>
      {isContent && <S.More>더보기👉</S.More>}
    </S.TitleContainer>
  );
};

export default Title;
