import * as S from '@components/ChatroomHeader/ChatroomHeader.style';
import NoticeIcon from '@components/NoticeIcon';

const CHATTING = '채팅';

const ChatroomHeader = () => {
  return (
    <S.Wrapper>
      <S.Title>{CHATTING}</S.Title>
      <NoticeIcon noticeOnIcon='NoticeOn' noticeOffIcon='NoticeOff' iconSize={1.5} />
    </S.Wrapper>
  );
};

export default ChatroomHeader;
