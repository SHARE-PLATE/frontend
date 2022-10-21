import moment from 'moment';
import 'moment/locale/ko';

import * as S from '@components/Chat/Chat.style';
import ImgContainer from '@components/common/ImgContainer';
import { ChatroomDetailChatType } from '@type/chat';

const Chat = ({
  contents,
  writer,
  writerThumbnailImageUrl,
  writtenDateTime,
  writtenByMe,
  shareWrittenByMe,
}: ChatroomDetailChatType) => {
  const dateTime = moment(writtenDateTime).add(9, 'h').format('A h:mm');

  return (
    <S.Wrapper writtenByMe={writtenByMe}>
      {!writtenByMe && (
        <S.ProfileImgWrapper shareWrittenByMe={shareWrittenByMe}>
          <ImgContainer
            imgSrc={writerThumbnailImageUrl}
            imgTitle={writerThumbnailImageUrl}
            imgWrapperRatio={1 / 1}
            imgWrapperWidth={S.profileImgWidth}
            borderRadius='5rem'
            additionalStyle={S.AdditionalImgStyle}
            // profile image is always 1:1 ratio
            noAlign={true}
          />
        </S.ProfileImgWrapper>
      )}
      <S.TextWrapper>
        {!writtenByMe && <S.Writer writtenByMe={writtenByMe}>{writer}</S.Writer>}
        <S.ContentsTimeWrapper writtenByMe={writtenByMe}>
          <S.Contents writtenByMe={writtenByMe}>{contents}</S.Contents>
          <S.DateTime writtenByMe={writtenByMe}>{dateTime}</S.DateTime>
        </S.ContentsTimeWrapper>
      </S.TextWrapper>
    </S.Wrapper>
  );
};

export default Chat;
