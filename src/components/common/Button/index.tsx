import { ReactNode } from 'react';

import * as S from '@components/common/Button/Button.style';

interface ButtonPropsType extends S.SizeStylesType {
  children: ReactNode;
  active?: boolean;
  onClick: () => void;
}

const Button = ({ children, size, onClick, active = false }: ButtonPropsType) => {
  return (
    <S.Button type='button' onClick={onClick} size={size} active={active}>
      {children}
    </S.Button>
  );
};

export default Button;
