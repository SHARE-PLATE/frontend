import * as S from '@components/ChatroomHeader/ChatroomHeader.style';
import Icon from '@components/common/Icon';

const CHATTING = '채팅';

const ChatroomHeader = () => {
  return (
    <S.Wrapper>
      <S.Title>{CHATTING}</S.Title>
      <Icon iconName='NoticeOn' iconSize='LARGE' />
    </S.Wrapper>
  );
};

export default ChatroomHeader;
