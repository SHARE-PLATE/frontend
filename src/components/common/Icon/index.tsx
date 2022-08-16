import { Icons, IconsType } from '@assets/icons';
import * as S from '@components/common/Icon/Icon.style';

export interface IconPropsType {
  iconName: IconsType;
  iconSize?: S.IconSizeType;
  handleClick?: (params: any) => void;
}

const Icon = ({ iconName, iconSize = 'SMALL', handleClick }: IconPropsType) => {
  return <S.Icon src={Icons[iconName]} size={iconSize} onClick={handleClick} />;
};

export default Icon;
