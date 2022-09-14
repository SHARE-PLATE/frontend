import { useNavigate } from 'react-router-dom';

import Address from '@components/Address';
import * as S from '@components/MainHeader/MainHeader.style';
import Icon from '@components/common/Icon';
import useCheckPathname from '@hooks/useCheckPathname';
import { portalState } from '@store/portal';

const MainHeader = () => {
  const isShareList = useCheckPathname({ targetPaths: ['shareList'] });

  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.IconsWrapper position='left'>
        <Icon iconName='LogoWithText' iconSize={4.2} />
      </S.IconsWrapper>
      <Address />
      <S.IconsWrapper position='space-between'>
        <Icon iconName='NoticeOn' iconSize='LARGE' handleClick={() => navigate('/notice')} />
        <Icon iconName='Map' iconSize='LARGE' />
      </S.IconsWrapper>
    </S.Wrapper>
  );
};

export default MainHeader;
