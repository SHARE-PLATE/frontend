import * as S from '@components/ScrollToTopBtn/ScrollToTopBtn.style';
import Icon from '@components/common/Icon';
import useCheckPathname from '@hooks/useCheckPathname';

const ScrollToTopBtn = () => {
  const isShareDetail = useCheckPathname({ targetPaths: ['shareDetail'] });

  const handleClickBtn = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <S.Wrapper isShareDetail={isShareDetail} onClick={handleClickBtn}>
      <Icon iconName='ArrowUp' />
    </S.Wrapper>
  );
};

export default ScrollToTopBtn;
