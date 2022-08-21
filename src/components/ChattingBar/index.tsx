import { ChangeEvent, useState } from 'react';

import * as S from '@components/ChattingBar/ChattingBar.style';
import Icon from '@components/common/Icon';

const ChattingBar = () => {
  const [messageValue, setMessageValue] = useState('');

  const handleChangeMessageValue = (event: ChangeEvent<HTMLInputElement>) => {
    setMessageValue(event.target.value);
  };

  return (
    <S.Wrapper>
      <S.PlusBtn>
        <Icon iconName='Plus' iconSize='LARGE' />
      </S.PlusBtn>
      <S.MessageInput
        value={messageValue}
        onFocus={() => window.scrollTo(0, document.body.offsetHeight)}
        onChange={handleChangeMessageValue}
        placeholder='메시지를 입력하세요.'
      />
      <Icon iconName='PaperAirplane' iconSize='LARGE' />
    </S.Wrapper>
  );
};

export default ChattingBar;
