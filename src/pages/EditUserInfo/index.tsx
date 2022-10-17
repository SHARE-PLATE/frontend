import EditUserInfoFrom from '@components/EditUserInfoFrom';
import EditUserInfoHeader from '@components/EditUserInfoHeader';
import * as S from '@pages/EditUserInfo/EditUserInfo.style';

const EditUserInfo = () => {
  return (
    <S.Wrapper>
      <EditUserInfoHeader />
      <EditUserInfoFrom />
    </S.Wrapper>
  );
};

export default EditUserInfo;
