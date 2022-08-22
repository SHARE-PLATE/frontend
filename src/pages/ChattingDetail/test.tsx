import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';

import axios from 'axios';
import { v4 as createRandomKey } from 'uuid';

import { API } from '@constants/api';
import * as S from '@pages/Chatting/Chatting.style';

// import { chattingConnect, sendMessage } from './socket';

const writer = 'JinJeon';

const Chatting = () => {
  const [messages, setMessages] = useState<{ writer: string; content: string }[]>([]);
  const [content, setContent] = useState('');

  const messagesList = messages.map(({ writer, content }) => (
    <S.ListWrapper key={createRandomKey()}>
      <div>{writer}</div>
      <div>{content}</div>
    </S.ListWrapper>
  ));

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   if (!content.length) return;

  //   setContent('');
  //   sendMessage({ writer, content });
  // };

  // const getMessages = async () => {
  //   const response = await axios.get(`${API.CHATTING_DETAIL}/rooms/1`);
  //   const { data: chattingData } = response;
  //   setMessages([...chattingData]);
  // };

  const handleContentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  // useMemo(() => {
  //   chattingConnect({ setter: setMessages });
  // }, []);

  // useEffect(() => {
  //   getMessages();
  // }, []);

  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <button>SEND</button>
      <input value={content} onChange={handleContentChange} />
      {/* </form> */}
      <div>{messagesList}</div>
    </>
  );
};

export default Chatting;
