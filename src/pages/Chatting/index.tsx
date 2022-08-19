import ChattingHeader from '@components/ChattingHeader';
import ChattingListItem from '@components/ChattingListItem';
import * as S from '@pages/Chatting/Chatting.style';
import { testChattingsInfo } from '@pages/Chatting/chatting';

const Chatting = () => {
  const ChattingList = testChattingsInfo.map((info) => (
    <ChattingListItem key={info.id} {...info} />
  ));

  return (
    <S.Wrapper>
      <div>
        <ChattingHeader />
      </div>
      <div>{ChattingList}</div>
    </S.Wrapper>
  );
};

export default Chatting;
