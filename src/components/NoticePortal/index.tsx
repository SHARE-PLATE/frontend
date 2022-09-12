import * as S from '@components/NoticePortal/NoticePortal.style';
import Portal from '@components/Portal';

const NoticePortal = () => {
  return (
    <Portal portalName='notice' type='full'>
      <S.Wrapper>notice</S.Wrapper>
    </Portal>
  );
};

export default NoticePortal;
