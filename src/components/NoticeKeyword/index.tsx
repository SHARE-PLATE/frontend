import moment from 'moment';
import 'moment/locale/ko';

import { NoticeKeywordDataType } from '@api/notice';
import ImgContainer from '@components/ImgContainer';
import * as S from '@components/NoticeKeyword/NoticeKeyword.style';
import { newShareEnrolledMention } from '@constants/mentions';

type NoticeKeywordPropsType = { contents: NoticeKeywordDataType }; // active notice 값에 따라 올바른 contents type 들어오도록 재설정 필요

const NoticeKeyword = ({ contents }: NoticeKeywordPropsType) => {
  const Items = contents.map(
    ({
      shareLocation,
      shareId,
      shareThumbnailImageUrl,
      shareTitle,
      notificationCreatedDateTime,
    }) => {
      const diffTime = moment(notificationCreatedDateTime).fromNow();

      return (
        <S.Item key={shareId}>
          <ImgContainer
            imgSrc={shareThumbnailImageUrl}
            imgTitle={shareTitle}
            imgWrapperRatio={1 / 1}
            imgWrapperWidth={S.itemHeight}
            borderRadius='0.25rem'
          />
          <S.TextWrapper>
            <S.TextUpper>
              <S.LocationBox>{shareLocation}</S.LocationBox>
              <S.EnrollMention>{newShareEnrolledMention}</S.EnrollMention>
            </S.TextUpper>
            <S.TitleWrapper>{shareTitle}</S.TitleWrapper>
            <S.DiffTime>{diffTime}</S.DiffTime>
          </S.TextWrapper>
        </S.Item>
      );
    },
  );

  return <S.Wrapper>{Items}</S.Wrapper>;
};

export default NoticeKeyword;
