import { useState } from 'react';

import * as S from '@components/ChatsUnread/ChatsUnread.style';

type ChatsUnreadPropsType = {
  state: 'hasValue' | 'loading' | 'hasError';
  newCount: number | null;
};

const ChatsUnread = ({ state, newCount }: ChatsUnreadPropsType) => {
  const [count, setCount] = useState<number | null>(0);
  if (newCount !== count && state === 'hasValue') setCount(newCount);

  return <S.Wrapper isShowed={!!count}>{count}</S.Wrapper>;
};

export default ChatsUnread;
