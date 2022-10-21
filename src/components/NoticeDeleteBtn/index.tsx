import { MouseEvent } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import { deleteNotice } from '@api/notice';
import * as S from '@components/NoticeDeleteBtn/NoticeDeleteBtn.style';
import Icon from '@components/common/Icon';
import { noticeDeletedMention } from '@constants/mentions';
import { bottomMessageState } from '@store/bottomMessage';
import { deleteModeState } from '@store/notice';

type NoticeDeleteBtnPropsType = {
  id: number;
  onDeleteSuccess: (id: number) => void;
};

const NoticeDeleteBtn = ({ id, onDeleteSuccess }: NoticeDeleteBtnPropsType) => {
  const deleteMode = useRecoilValue(deleteModeState);
  const setBottomMessage = useSetRecoilState(bottomMessageState);
  const handleClickDeleteBtn = async (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const isDeleted = await deleteNotice({ id });
    if (isDeleted) {
      onDeleteSuccess(id);
      setBottomMessage(({ trigger }) => ({
        trigger: trigger + 1,
        message: noticeDeletedMention(1),
      }));
    }
  };

  return (
    <S.Wrapper onClick={handleClickDeleteBtn} isShowed={deleteMode}>
      <Icon iconName='DeleteCircle' iconSize={1} />
    </S.Wrapper>
  );
};

export default NoticeDeleteBtn;
