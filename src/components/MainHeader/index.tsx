import { useNavigate } from 'react-router-dom';

import Address from '@components/Address';
import * as S from '@components/MainHeader/MainHeader.style';
import Icon from '@components/common/Icon';
import useCheckPathname from '@hooks/useCheckPathname';

const MainHeader = () => {
  const isShareList = useCheckPathname({ targetPaths: ['shareList'] });

  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.IconsWrapper position='left'>
        <Icon iconName='LogoWithText' iconSize={4.2} handleClick={() => navigate('/')} />
      </S.IconsWrapper>
      <Address />
      <S.IconsWrapper position={isShareList ? 'space-between' : 'right'}>
        <Icon iconName='NoticeOn' iconSize='LARGE' handleClick={() => navigate('/notice')} />
        {isShareList && (
          <Icon iconName='Map' iconSize='LARGE' handleClick={() => navigate('/shareMap')} />
        )}
      </S.IconsWrapper>
    </S.Wrapper>
  );
};

export default MainHeader;
