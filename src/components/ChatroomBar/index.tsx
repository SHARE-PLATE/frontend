import { ChangeEvent, FormEvent, KeyboardEvent, useRef, useState } from 'react';

import * as S from '@components/ChatroomBar/ChatroomBar.style';
import Icon from '@components/common/Icon';
import { sendChat } from '@socket/stomp';

type ChatroomBarPropsType = { chatroomId: string };

const ChatroomBar = ({ chatroomId }: ChatroomBarPropsType) => {
  const [chatValue, setChatValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const scrollWithTypingRef = useRef(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout>();

  const sendCurChat = (event?: FormEvent) => {
    event && event.preventDefault();
    if (!chatValue.length) return;

    sendChat({ contents: chatValue, chatroomId });
    setChatValue('');
  };

  /** handler for type key */
  const handleChangeChatValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { inputType } = event.nativeEvent as any;
    //@ts-ignore ** 추후에 반드시 처리가 필요합니다!
    if (inputType === 'insertLineBreak') return;
    setChatValue(event.target.value);

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    scrollWithTypingRef.current = true;
    typingTimeoutRef.current = setTimeout(() => (scrollWithTypingRef.current = false), 500);
  };

  /** handler for type 'Enter' key */
  const handleKeyDownChat = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    const { key, shiftKey, keyCode } = event;
    // 'keyCode' is deprecated but error occurs when just use 'key' in korean

    if (key !== 'Enter' || keyCode !== 13) return;
    if (!shiftKey) {
      sendCurChat();
    } else {
      scrollWithTypingRef.current = true;
      setChatValue(chatValue + '\n');
    }
  };

  /** handler for auto scroll during typing */
  const handleScrollTextarea = () => {
    if (!textareaRef.current || !scrollWithTypingRef.current) return;
    textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    scrollWithTypingRef.current = false;
  };

  return (
    <S.Wrapper onSubmit={sendCurChat}>
      <S.ButtonWrapper>
        <S.PlusBtn>
          <Icon iconName='PlusBold' iconSize={0.75} />
        </S.PlusBtn>
      </S.ButtonWrapper>
      <S.ChatTextareaWrapper>
        <S.ChatTextarea
          ref={textareaRef}
          rows={1}
          spellCheck={false}
          value={chatValue}
          onKeyDown={handleKeyDownChat}
          onChange={handleChangeChatValue}
          onScroll={handleScrollTextarea}
          placeholder='메시지를 입력하세요.'
        />
      </S.ChatTextareaWrapper>
      <S.ButtonWrapper type='submit'>
        <Icon iconName='PaperAirplane' iconSize='LARGE' />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default ChatroomBar;
