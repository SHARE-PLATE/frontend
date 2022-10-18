import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import NoticeContent from '@components/NoticeContent';
import Icon from '@components/common/Icon';
import { EDIT, FINISH, NOTICE_CENTER } from '@constants/words';
import * as S from '@pages/Notice/Notice.style';
import { deleteModeState, newNoticeState } from '@store/notice';

const Notice = () => {
  const navigate = useNavigate();
  const [deleteMode, setDeleteMode] = useRecoilState(deleteModeState);
  const setNewNotice = useSetRecoilState(newNoticeState);

  setNewNotice(null);

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderBtn onClick={() => navigate(-1)}>
          <Icon iconName='Back' iconSize={1.125} />
        </S.HeaderBtn>
        <S.HeaderTitle>{NOTICE_CENTER}</S.HeaderTitle>
        <S.HeaderBtn onClick={() => setDeleteMode(!deleteMode)}>
          <S.DeleteModeButton>{!deleteMode ? EDIT : FINISH}</S.DeleteModeButton>
        </S.HeaderBtn>
      </S.Header>
      <NoticeContent />
    </S.Wrapper>
  );
};

export default Notice;
