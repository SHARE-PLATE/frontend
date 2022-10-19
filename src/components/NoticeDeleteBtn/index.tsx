import { useRecoilValue } from 'recoil';

import { deleteNotice } from '@api/notice';
import * as S from '@components/NoticeDeleteBtn/NoticeDeleteBtn.style';
import Icon from '@components/common/Icon';
import { deleteModeState } from '@store/notice';

type NoticeDeleteBtnPropsType = {
  id: number;
};

const NoticeDeleteBtn = ({ id }: NoticeDeleteBtnPropsType) => {
  const deleteMode = useRecoilValue(deleteModeState);
  const handleClickDeleteBtn = async () => {
    const response = await deleteNotice({ id });
    console.log('해결하기!' + response);
  };

  return (
    <S.Wrapper onClick={handleClickDeleteBtn} isShowed={deleteMode}>
      <Icon iconName='DeleteCircle' iconSize={1} />
    </S.Wrapper>
  );
};

export default NoticeDeleteBtn;
