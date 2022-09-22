import 'moment/locale/ko';

import moment from 'moment';
import { useRecoilValue } from 'recoil';

import { NoticeKeywordDataType } from '@api/notice';
import NoticeDeleteBtn from '@components/NoticeDeleteBtn';
import * as S from '@components/NoticeKeyword/NoticeKeyword.style';
import ImgContainer from '@components/common/ImgContainer';
import { newShareEnrolledMention } from '@constants/mentions';
import { deleteModeState } from '@store/notice';

type NoticeKeywordPropsType = {
  contents: NoticeKeywordDataType[];
};

const NoticeKeyword = ({ contents }: NoticeKeywordPropsType) => {
  const deleteMode = useRecoilValue(deleteModeState);
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
          <S.ImgWrapper>
            <ImgContainer
              imgSrc={shareThumbnailImageUrl}
              imgTitle={shareTitle}
              imgWrapperRatio={1 / 1}
              imgWrapperWidth={S.itemHeight}
              borderRadius='0.25rem'
            />
          </S.ImgWrapper>
          <S.TextWrapper>
            <S.TextUpper>
              <S.LocationBox>{shareLocation}</S.LocationBox>
              <S.EnrollMention>{newShareEnrolledMention}</S.EnrollMention>
            </S.TextUpper>
            <S.TitleWrapper>{shareTitle}</S.TitleWrapper>
            <S.DiffTime>{diffTime}</S.DiffTime>
          </S.TextWrapper>
          <NoticeDeleteBtn id={shareId} isShowed={deleteMode} />
        </S.Item>
      );
    },
  );

  return <S.Wrapper>{Items}</S.Wrapper>;
};

export default NoticeKeyword;