import { ChangeEvent, FormEvent, useState } from 'react';

import * as S from '@components/ChatroomBar/ChatroomBar.style';
import Icon from '@components/common/Icon';
import { connectChat } from '@socket/chatroomSocket';

type ChatroomBarPropsType = { chatroomId: string; scrollToBottom: () => void };

const ChatroomBar = ({ chatroomId, scrollToBottom }: ChatroomBarPropsType) => {
  const [chatValue, setChatValue] = useState('');

  const handleChangechatValue = (event: ChangeEvent<HTMLInputElement>) => {
    setChatValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!chatValue.length) return;

    const { sendChat } = connectChat();
    setChatValue('');
    sendChat({ contents: chatValue, chatroomId });
    scrollToBottom();
  };

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.PlusBtn>
        <Icon iconName='PlusBold' iconSize={0.75} />
      </S.PlusBtn>
      <S.ChatInput
        value={chatValue}
        onChange={handleChangechatValue}
        placeholder='메시지를 입력하세요.'
      />
      <S.Button>
        <Icon iconName='PaperAirplane' iconSize='LARGE' />
      </S.Button>
    </S.Wrapper>
  );
};

export default ChatroomBar;
