import { useNavigate } from 'react-router-dom';

import * as S from '@components/EditUserInfoHeader/EditUserInfoHeader.style';
import Icon from '@components/common/Icon';
import { pathName } from '@constants/pathName';
import { EDIT_PROFILE, FINISH } from '@constants/words';

interface EditUserInfoHeaderPropsType {
  onClickSubmitButton: () => void;
}

const EditUserInfoHeader = ({ onClickSubmitButton }: EditUserInfoHeaderPropsType) => {
  const navigate = useNavigate();
  const backToSetting = () => navigate(pathName.settingsProfile);

  return (
    <S.HeaderWrapper>
      <S.ButtonWrapper position='left'>
        <Icon iconName='Back' handleClick={backToSetting} />
      </S.ButtonWrapper>
      <S.Title>{EDIT_PROFILE}</S.Title>
      <S.ButtonWrapper position='right'>
        <S.SubmitBtn onClick={onClickSubmitButton}>{FINISH}</S.SubmitBtn>
      </S.ButtonWrapper>
    </S.HeaderWrapper>
  );
};

export default EditUserInfoHeader;
