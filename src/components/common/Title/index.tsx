import { IconsType } from '@assets/icons';
import * as S from '@components/common/Title/Title.style';
import { SHOW_MORE } from '@constants/words';

import Icon from '../Icon';

interface TitlePropsType {
  contentTitle: string;
  iconName?: IconsType;
  iconSize?: number;
  handleClick?: () => void;
  size?: S.TitleHeaderSizeType;
}

const Title = ({
  contentTitle,
  handleClick,
  iconName,
  size = 'MEDIUM',
  iconSize,
}: TitlePropsType) => {
  return (
    <S.TitleContainer size={size}>
      <S.TitleHeader size={size}>
        <S.TitleWrapper>
          {iconName && <Icon iconName={iconName} iconSize={iconSize} />}
          {contentTitle}
        </S.TitleWrapper>
        {handleClick && <S.OptionButton onClick={handleClick}>{SHOW_MORE}</S.OptionButton>}
      </S.TitleHeader>
    </S.TitleContainer>
  );
};

export default Title;
