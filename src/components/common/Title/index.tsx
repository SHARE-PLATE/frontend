import * as S from '@components/common/Title/Title.style';
import { SHOW_MORE } from '@constants/words';

interface TitlePropsType {
  contentTitle: string;
  handleClick?: () => void;
  size?: S.TitleHeaderSizeType;
}

const Title = ({ contentTitle, handleClick, size = 'MEDIUM' }: TitlePropsType) => {
  return (
    <S.TitleContainer size={size}>
      <S.TitleHeader size={size}>
        {contentTitle}
        {handleClick && <S.OptionButton onClick={handleClick}>{SHOW_MORE}</S.OptionButton>}
      </S.TitleHeader>
    </S.TitleContainer>
  );
};

export default Title;
