import * as S from '@components/ChattingHeader/ChattingHeader.style';
import Icon from '@components/common/Icon';

const CHATTING = '채팅';

const ChattingHeader = () => {
  return (
    <S.Wrapper>
      <S.Title>{CHATTING}</S.Title>
      <Icon iconName='NoticeOn' iconSize='LARGE' />
    </S.Wrapper>
  );
};

export default ChattingHeader;
