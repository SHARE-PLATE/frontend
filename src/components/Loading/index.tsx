import * as S from '@components/Loading/Loading.style';

const Loading = (animationProps: S.AnimationPropsType) => {
  return (
    <S.Wrapper>
      <S.Animation {...animationProps} />
    </S.Wrapper>
  );
};

export default Loading;
