import { useLocation } from 'react-router-dom';

import * as S from '@components/ScrollToTopBtn/ScrollToTopBtn.style';
import Icon from '@components/common/Icon';
import { pathName } from '@constants/pathName';

const ScrollToTopBtn = () => {
  const { pathname } = useLocation();
  const isShowed = `/${pathname}` === pathName.shareDetail;

  const handleClickBtn = () => window.scrollTo(0, 0);

  return (
    <S.Wrapper isShowed={isShowed} onClick={handleClickBtn}>
      <Icon iconName='ArrowUp' iconSize='MEDIUM' />
    </S.Wrapper>
  );
};

export default ScrollToTopBtn;
