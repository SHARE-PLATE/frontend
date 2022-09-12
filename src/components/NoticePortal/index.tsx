import { useRef } from 'react';

import * as S from '@components/NoticePortal/NoticePortal.style';
import Portal from '@components/Portal';
import Icon from '@components/common/Icon';
import { NOTICE_CENTER } from '@constants/words';

const NoticePortal = () => {
  const closeBtn = useRef<HTMLButtonElement>(null);

  return (
    <Portal portalName='notice' type='full' closeBtn={closeBtn}>
      <S.Wrapper>
        <S.Header>
          <S.HeaderTitle>{NOTICE_CENTER}</S.HeaderTitle>
          <S.CloseBtn ref={closeBtn}>
            <Icon iconName='Back' />
          </S.CloseBtn>
        </S.Header>
      </S.Wrapper>
    </Portal>
  );
};

export default NoticePortal;
