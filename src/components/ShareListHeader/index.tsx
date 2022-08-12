import Address from '@components/Address';
import * as S from '@components/ShareListHeader/ShareListHeader.style';
import Icon from '@components/common/Icon';

const ShareListHeader = () => {
  return (
    <S.Wrapper>
      <div>
        <Address />
      </div>
      <div>
        <Icon iconName='NoticeOn' iconSize='LARGE' />
        {/* 내 주변 아이콘으로 변경 */}
        <Icon iconName='NoticeOn' iconSize='LARGE' />
      </div>
    </S.Wrapper>
  );
};

export default ShareListHeader;
