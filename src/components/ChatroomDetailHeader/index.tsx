import { useNavigate } from 'react-router-dom';

import * as S from '@components/ChatroomDetailHeader/ChatroomDetailHeader.style';
import Icon from '@components/common/Icon';

const ChatroomDatailHeader = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <Icon iconName='Back' iconSize='LARGE' handleClick={() => navigate(-1)} />
      <S.HeaderInfo>
        <div>그룹 채팅</div>
        <S.Location>역삼동</S.Location>
      </S.HeaderInfo>
      <Icon iconName='DotsVertical' iconSize='LARGE' />
    </S.Wrapper>
  );
};

export default ChatroomDatailHeader;
