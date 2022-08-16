import Address from '@components/Address';
import * as S from '@components/MainHeader/MainHeader.style';
import Icon from '@components/common/Icon';

const MainHeader = () => {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <Icon iconName='Logo' iconSize='LARGE' />
      </S.IconWrapper>
      <S.HeaderAddressWrapper>
        <Address />
      </S.HeaderAddressWrapper>
      <S.IconWrapper>
        <Icon iconName='NoticeOn' iconSize='LARGE' />
      </S.IconWrapper>
    </S.Wrapper>
  );
};

export default MainHeader;
