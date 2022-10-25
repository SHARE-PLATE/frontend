import { useNavigate } from 'react-router-dom';

import * as S from '@components/MainHeader/MainHeader.style';
import NoticeIcon from '@components/NoticeIcon';
import Icon from '@components/common/Icon';
import { pathName } from '@constants/pathName';

type ShareMapHeaderPropsType = {
  isActive: boolean;
};

const ShareMapHeader = ({ isActive }: ShareMapHeaderPropsType) => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.IconsWrapper position='left'>
        <Icon iconName='LogoWithText' iconSize={4.2} handleClick={() => navigate('/')} />
      </S.IconsWrapper>
      <S.Header>내주변</S.Header>
      <S.IconsWrapper position='flex-end' isRightAngle={isActive} rightAngleTarget={2}>
        <NoticeIcon noticeOnIcon='NoticeOn' noticeOffIcon='NoticeOff' iconSize={1.5} />
        <Icon
          iconName='Hamburger'
          iconSize={1.25}
          handleClick={() => navigate(pathName.shareList)}
        />
      </S.IconsWrapper>
    </S.Wrapper>
  );
};

export default ShareMapHeader;
