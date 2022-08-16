import Address from '@components/Address';
import * as S from '@components/ShareListHeader/ShareListHeader.style';
import Icon from '@components/common/Icon';

const ShareListHeader = () => {
  return (
    <S.Wrapper>
      <Address />
      <Icon iconName='NoticeOn' iconSize='LARGE' />
    </S.Wrapper>
  );
};

export default ShareListHeader;
