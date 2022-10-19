import { useEffect } from 'react';

import { useRecoilState, useSetRecoilState } from 'recoil';

import { deleteNotice } from '@api/notice';
import * as S from '@components/NoticeDeleteAllButton/NoticeDeleteAllButton.style';
import { noticeDeletedMention } from '@constants/mentions';
import { DELETE_ALL } from '@constants/words';
import { bottomMessageState } from '@store/bottomMessage';
import { deleteModeState, noticeStateTrigger } from '@store/notice';

type NoticeDeleteAllButtonPropsType = {
  idList?: number[];
  isList: boolean;
};

const NoticeDeleteAllButton = ({ idList, isList }: NoticeDeleteAllButtonPropsType) => {
  const [deleteMode, setDeleteMode] = useRecoilState(deleteModeState);
  const setNoticeStateTrigger = useSetRecoilState(noticeStateTrigger);
  const setBottomMessage = useSetRecoilState(bottomMessageState);

  const handleDeleteAllBtn = async () => {
    if (!idList || !idList.length) return;
    const isDeleted = await deleteNotice({ idList }); // 응답 후 처리 과정 필요!
    if (isDeleted) {
      setNoticeStateTrigger((prev) => prev + 1);
      setBottomMessage(({ trigger }) => ({
        trigger: trigger + 1,
        message: noticeDeletedMention(idList.length),
      }));
    }
  };

  useEffect(() => {
    return () => setDeleteMode(false);
  }, []);

  return (
    <S.Wrapper onClick={handleDeleteAllBtn} isDeleteMode={deleteMode && isList}>
      {DELETE_ALL}
    </S.Wrapper>
  );
};

export default NoticeDeleteAllButton;
