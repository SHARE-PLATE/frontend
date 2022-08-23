import moment from 'moment';
import 'moment/locale/ko';

import * as S from '@components/Chat/Chat.style';

type ChatPropsType = {
  contents: string;
  writer: string;
  writerThumbnailImageUrl: string;
  writtenDateTime: string;
  writtenByMe: boolean;
};

const Chat = ({
  contents,
  writer,
  writerThumbnailImageUrl,
  writtenDateTime,
  writtenByMe,
}: ChatPropsType) => {
  const dateTime = moment(writtenDateTime).format('LT');

  return (
    <S.Wrapper writtenByMe={writtenByMe}>
      <S.ImgWrapper>
        <img src={writerThumbnailImageUrl} />
      </S.ImgWrapper>
      <S.TextWrapper>
        <S.Writer writtenByMe={writtenByMe}>{writer}</S.Writer>
        <S.ContentsTimeWrapper writtenByMe={writtenByMe}>
          <S.Contents writtenByMe={writtenByMe}>{contents}</S.Contents>
          <S.DateTime writtenByMe={writtenByMe}>{dateTime}</S.DateTime>
        </S.ContentsTimeWrapper>
      </S.TextWrapper>
    </S.Wrapper>
  );
};

export default Chat;
