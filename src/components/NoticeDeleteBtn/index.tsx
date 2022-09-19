import { deleteNotice } from '@api/notice';
import * as S from '@components/NoticeDeleteBtn/NoticeDeleteBtn.style';
import Icon from '@components/common/Icon';

type NoticeDeleteBtnPropsType = {
  id: number;
  isShowed: boolean;
};

const NoticeDeleteBtn = ({ id, isShowed }: NoticeDeleteBtnPropsType) => {
  const handleClickDeleteBtn = async () => {
    const response = await deleteNotice({ id });
    console.log('해결하기!' + response);
  };

  return (
    <S.Wrapper onClick={handleClickDeleteBtn} isShowed={isShowed}>
      <Icon iconName='DeleteCircle' iconSize={1} />
    </S.Wrapper>
  );
};

export default NoticeDeleteBtn;
