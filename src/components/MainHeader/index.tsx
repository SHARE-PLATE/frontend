import { useSetRecoilState } from 'recoil';

import Address from '@components/Address';
import * as S from '@components/MainHeader/MainHeader.style';
import Icon from '@components/common/Icon';
import useCheckPathname from '@hooks/useCheckPathname';
import { portalState } from '@store/portal';

const MainHeader = () => {
  const isShareList = useCheckPathname({ targetPaths: ['shareList'] });

  const setPortal = useSetRecoilState(portalState);

  return (
    <S.Wrapper>
      <S.IconsWrapper position='left'>
        <Icon iconName='LogoWithText' iconSize={4.2} />
      </S.IconsWrapper>
      <Address />
      <S.IconsWrapper position='right'>
        <Icon iconName='NoticeOn' iconSize='LARGE' handleClick={() => setPortal('notice')} />
        {isShareList && <Icon iconName='Map' iconSize='LARGE' />}
      </S.IconsWrapper>
    </S.Wrapper>
  );
};

export default MainHeader;
