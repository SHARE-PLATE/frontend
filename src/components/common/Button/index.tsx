import { ReactNode } from 'react';

import * as S from '@components/common/Button/Button.style';

interface ButtonPropsType {
  children: ReactNode;
  size: string;
  onClick: () => void;
}

const Button = ({ children, size, onClick }: ButtonPropsType) => {
  return (
    <S.Button onClick={onClick} size={size}>
      {children}
    </S.Button>
  );
};

export default Button;
