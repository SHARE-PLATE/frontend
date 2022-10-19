import { useRecoilValue_TRANSITION_SUPPORT_UNSTABLE, useSetRecoilState } from 'recoil';

import { deleteNotice } from '@api/notice';
import * as S from '@components/NoticeDeleteAllButton/NoticeDeleteAllButton.style';
import { DELETE_ALL } from '@constants/words';
import { deleteModeState, noticeStateTrigger } from '@store/notice';

type NoticeDeleteAllButtonPropsType = {
  idList?: number[];
};

const NoticeDeleteAllButton = ({ idList }: NoticeDeleteAllButtonPropsType) => {
  const deleteMode = useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(deleteModeState);
  const setNoticeStateTrigger = useSetRecoilState(noticeStateTrigger);

  const handleDeleteAllBtn = async () => {
    if (!idList || !idList.length) return;
    const response = await deleteNotice({ idList }); // 응답 후 처리 과정 필요!
    if (response?.status === 200) setNoticeStateTrigger((prev) => prev + 1);
  };

  return (
    <S.Wrapper onClick={handleDeleteAllBtn} isDeleteMode={deleteMode && !!idList?.length}>
      {DELETE_ALL}
    </S.Wrapper>
  );
};

export default NoticeDeleteAllButton;
