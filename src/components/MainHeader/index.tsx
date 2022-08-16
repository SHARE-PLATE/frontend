import Address from '@components/Address';
import * as S from '@components/MainHeader/MainHeader.style';
import Icon from '@components/common/Icon';

const MainHeader = () => {
  return (
    <S.Wrapper>
      <Icon iconName='Logo' iconSize='LARGE' />
      <Address />
      <Icon iconName='NoticeOn' iconSize='LARGE' />
    </S.Wrapper>
  );
};

export default MainHeader;
