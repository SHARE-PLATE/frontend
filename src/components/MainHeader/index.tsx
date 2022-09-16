import Address from '@components/Address';
import * as S from '@components/MainHeader/MainHeader.style';
import Icon from '@components/common/Icon';

const MainHeader = () => {
  return (
    <S.Wrapper>
      <S.IconsWrapper position='left'>
        <Icon iconName='LogoWithText' iconSize={4.2} />
      </S.IconsWrapper>
      <Address />
      <S.IconsWrapper position='right'>
        <Icon iconName='NoticeOn' iconSize='LARGE' />
      </S.IconsWrapper>
    </S.Wrapper>
  );
};

export default MainHeader;
