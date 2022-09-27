import { MouseEvent } from 'react';

import * as S from '@components/WishHeart/WishHeart.style';
import Icon from '@components/common/Icon';
interface WishHeartPropsType {
  type: S.HeartWrapperType;
  id: number;
  isEmptyHeart: boolean;
  clickHandler: (e: MouseEvent, id: number) => void;
}

const WishHeart = ({ type, id, isEmptyHeart, clickHandler }: WishHeartPropsType) => {
  return (
    <S.HeartWrapper type={type} isEmptyHeart={isEmptyHeart}>
      <Icon iconName='HeartEmpty' handleClick={(e) => clickHandler(e, id)} />
    </S.HeartWrapper>
  );
};

export default WishHeart;
