import { useLocation, useNavigate } from 'react-router-dom';

import * as S from '@components/ShareFormHeader/ShareFormHeader.style';
import Icon from '@components/common/Icon';

const ShareFormHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const recruitmentType = pathname.split('/')[2] === 'delivery' ? '배달' : '재료';
  const handleClickGoBack = () => navigate(-1);
  return (
    <S.Wrapper>
      <Icon iconName='Back' handleClick={handleClickGoBack} />
      <S.Title>{recruitmentType}쉐어 모집</S.Title>
    </S.Wrapper>
  );
};

export default ShareFormHeader;
