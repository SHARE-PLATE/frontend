import { useRecoilState } from 'recoil';

import * as S from '@components/NoticeDeleteModeButton/NoticeDeleteModeButton.style';
import { EDIT, FINISH } from '@constants/words';
import { deleteModeState } from '@store/notice';

const NoticeDeleteModeButton = () => {
  const [deleteMode, setDeleteMode] = useRecoilState(deleteModeState);

  return (
    <S.HeaderBtn onClick={() => setDeleteMode(!deleteMode)}>
      <S.DeleteModeButton>{!deleteMode ? EDIT : FINISH}</S.DeleteModeButton>
    </S.HeaderBtn>
  );
};

export default NoticeDeleteModeButton;
