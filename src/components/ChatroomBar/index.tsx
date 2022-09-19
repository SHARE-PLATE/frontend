import { ChangeEvent, FormEvent, useState } from 'react';

import * as S from '@components/ChatroomBar/ChatroomBar.style';
import Icon from '@components/common/Icon';
import { sendChat } from '@socket/chatroomSocket';

const ChatroomBar = ({ chatroomId }: { chatroomId: string }) => {
  const [chatValue, setChatValue] = useState('');

  const handleChangechatValue = (event: ChangeEvent<HTMLInputElement>) => {
    setChatValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!chatValue.length) return;

    setChatValue('');
    sendChat({ contents: chatValue, chatroomId });
    window.scrollTo(0, document.body.offsetHeight);
  };

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.PlusBtn>
        <Icon iconName='Plus' iconSize='LARGE' />
      </S.PlusBtn>
      <S.ChatInput
        value={chatValue}
        onFocus={() => window.scrollTo(0, document.body.offsetHeight)}
        onChange={handleChangechatValue}
        placeholder='메시지를 입력하세요.'
      />
      <button>
        <Icon iconName='PaperAirplane' iconSize='LARGE' />
      </button>
    </S.Wrapper>
  );
};

export default ChatroomBar;
