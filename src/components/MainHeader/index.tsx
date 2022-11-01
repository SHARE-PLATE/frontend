import { useNavigate } from 'react-router-dom';

import Address from '@components/Address';
import * as S from '@components/MainHeader/MainHeader.style';
import NoticeIcon from '@components/NoticeIcon';
import Icon from '@components/common/Icon';
import { pathName } from '@constants/pathName';
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
      <S.IconsWrapper position={isShareList ? 'flex-end' : 'right'}>
        <NoticeIcon noticeOnIcon='NoticeOn' noticeOffIcon='NoticeOff' iconSize={1.5} />
        {isShareList && (
          <Icon
            iconName='Map'
            iconSize={1.25}
            handleClick={() => navigate(pathName.shareMap)}
            noSkeleton={true}
          />
        )}
      </S.IconsWrapper>
    </S.Wrapper>
  );
};

export default MainHeader;
