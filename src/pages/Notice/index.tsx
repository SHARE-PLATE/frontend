import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import NoticeContent from '@components/NoticeContent';
import Tabs from '@components/Tabs';
import Icon from '@components/common/Icon';
import { EDIT, FINISH, NOTICE_CENTER } from '@constants/words';
import * as S from '@pages/Notice/Notice.style';
import { activeNoticeState } from '@store/activeNotice';
import { deleteModeState, newNoticeState, noticeInfoState } from '@store/notice';

const Notice = () => {
  const navigate = useNavigate();
  const [deleteMode, setDeleteMode] = useRecoilState(deleteModeState);
  const setNewNotice = useSetRecoilState(newNoticeState);
  const noticeTabsInfo = useRecoilValue(noticeInfoState);

  // set notice icon show that new notice doesn't exist
  setNewNotice(null);

  return (
    <S.Wrapper>
      <S.TopFixedWrapper>
        <S.Header>
          <S.HeaderBtn onClick={() => navigate(-1)}>
            <Icon iconName='Back' iconSize={1.125} />
          </S.HeaderBtn>
          <S.HeaderTitle>{NOTICE_CENTER}</S.HeaderTitle>
          <S.HeaderBtn onClick={() => setDeleteMode(!deleteMode)}>
            <S.DeleteModeButton>{!deleteMode ? EDIT : FINISH}</S.DeleteModeButton>
          </S.HeaderBtn>
        </S.Header>
        <Tabs tabsInfo={noticeTabsInfo} targetAtom={activeNoticeState} />
      </S.TopFixedWrapper>
      <NoticeContent />
    </S.Wrapper>
  );
};

export default Notice;
