import { useNavigate } from 'react-router-dom';

import * as S from '@components/EditUserInfoHeader/EditUserInfoHeader.style';
import Icon from '@components/common/Icon';
import { EDIT_PROFILE, FINISH } from '@constants/words';

const EditUserInfoHeader = () => {
  const navigate = useNavigate();
  const handleClickGoBack = () => navigate(-1);

  return (
    <S.HeaderWrapper>
      <Icon iconName='Back' handleClick={handleClickGoBack} />
      <S.Title>{EDIT_PROFILE}</S.Title>
      <S.SubmitBtn>{FINISH}</S.SubmitBtn>
    </S.HeaderWrapper>
  );
};

export default EditUserInfoHeader;
