import { useNavigate } from 'react-router-dom';

import * as S from '@components/ChatroomDetailHeader/ChatroomDetailHeader.style';
import Icon from '@components/common/Icon';
import { ChatroomDetailDataType, ChatroomDetailShareType } from '@type/chat';

type ChatroomDetailHeaderPropsType = Pick<ChatroomDetailDataType, 'type'> &
  Pick<ChatroomDetailShareType, 'writer'>;

const GROUP_CHATROOM = '그룹채팅';
const QUESTION_CHATROOM = '문의채팅';
const SHARE_CHATROOM = '쉐어채팅';

const ChatroomDatailHeader = ({ type, writer }: ChatroomDetailHeaderPropsType) => {
  const navigate = useNavigate();
  const mainTitle = type === 'QUESTION' ? writer : GROUP_CHATROOM;
  const subTitle = type === 'QUESTION' ? QUESTION_CHATROOM : SHARE_CHATROOM;

  return (
    <S.Wrapper>
      <Icon iconName='Back' iconSize='LARGE' handleClick={() => navigate(-1)} />
      <S.HeaderInfo>
        <div>{mainTitle}</div>
        <S.Location>{subTitle}</S.Location>
      </S.HeaderInfo>
      <Icon iconName='DotsVertical' iconSize='LARGE' />
    </S.Wrapper>
  );
};

export default ChatroomDatailHeader;
