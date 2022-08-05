import * as S from '@components/common/Title/Title.style';

interface TitlePropsType {
  contentTitle: string;
  isContent?: boolean;
}

const Title = ({ contentTitle, isContent = false }: TitlePropsType) => {
  return (
    <S.TitleContainer>
      <S.TitleHeader>
        {contentTitle}
        {isContent && <div>더보기 👉</div>}
      </S.TitleHeader>
    </S.TitleContainer>
  );
};

export default Title;
