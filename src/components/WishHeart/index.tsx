import * as S from '@components/WishHeart/WishHeart.style';
import Icon from '@components/common/Icon';

interface WishHeartPropsType {
  type: S.HeartWrapperType;
  clickHandler?: () => void;
}

const WishHeart = ({ type, clickHandler }: WishHeartPropsType) => {
  return (
    <S.HeartWrapper type={type}>
      <Icon iconName='Heart' handleClick={clickHandler} />
    </S.HeartWrapper>
  );
};

export default WishHeart;
