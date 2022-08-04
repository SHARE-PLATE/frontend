import Address from '@components/Address';
import * as S from '@components/ShareListHeader/ShareListHeader.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
const ShareListHeader = () => {
  return (
    <S.Wrapper>
      <div>
        <Address />
      </div>
      <div>
        <Icon iconName={ICON_NAME.NOTICE_ON} iconSize={ICON_SIZE.LARGE} />
        {/* 내 주변 아이콘으로 변경 */}
        <Icon iconName={ICON_NAME.NOTICE_ON} iconSize={ICON_SIZE.LARGE} />
      </div>
    </S.Wrapper>
  );
};

export default ShareListHeader;
