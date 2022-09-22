import { useState } from 'react';

import { Icons, IconsType } from '@assets/icons';
import * as S from '@components/common/Icon/Icon.style';
import { ColorsType } from '@styles/theme';

export interface IconPropsType {
  iconName: IconsType;
  iconSize?: S.IconSizeType;
  color?: ColorsType;
  opacity?: number;
  borderRadius?: string;
  noSkeleton?: boolean;
  handleClick?: (params: any) => void;
}

const Icon = ({
  iconName,
  iconSize = 'SMALL',
  color = 'white1',
  opacity = 0.25,
  borderRadius = '0.25rem',
  noSkeleton = false,
  handleClick,
}: IconPropsType) => {
  const [isSet, setIsSet] = useState<boolean>(false);
  const handleOnLoad = () => setIsSet(true);

  return (
    <S.IconButton
      color={color}
      opacity={opacity}
      borderRadius={borderRadius}
      size={iconSize}
      isSet={isSet}
      noSkeleton={noSkeleton}
    >
      <S.Icon src={Icons[iconName]} size={iconSize} onClick={handleClick} onLoad={handleOnLoad} />
    </S.IconButton>
  );
};

export default Icon;
