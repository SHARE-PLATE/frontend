import Address from '@components/Address';
import * as S from '@components/MainHeader/MainHeader.style';
import Icon from '@components/common/Icon';

const MainHeader = () => {
  return (
    <S.Wrapper>
      <S.IconsWrapper position='left'>
        <Icon iconName='Logo' iconSize='LARGE' />
      </S.IconsWrapper>
      <Address />
      <S.IconsWrapper position='space-between'>
        <Icon iconName='NoticeOn' iconSize='LARGE' />
        <Icon iconName='Map' iconSize='LARGE' />
      </S.IconsWrapper>
    </S.Wrapper>
  );
};

export default MainHeader;
