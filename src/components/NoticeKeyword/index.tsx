import 'moment/locale/ko';

import { useState } from 'react';

import moment from 'moment';
import { useRecoilValue } from 'recoil';

import NoticeDeleteAllButton from '@components/NoticeDeleteAllButton';
import NoticeDeleteBtn from '@components/NoticeDeleteBtn';
import * as S from '@components/NoticeKeyword/NoticeKeyword.style';
import ImgContainer from '@components/common/ImgContainer';
import { newShareEnrolledMention } from '@constants/mentions';
import { deleteModeState } from '@store/notice';
import { NoticeKeywordDataType } from '@type/notice';

const NoticeKeyword = ({ contents }: { contents: NoticeKeywordDataType[] }) => {
  const deleteMode = useRecoilValue(deleteModeState);
  const [keywordData, setKeywordData] = useState(contents);

  const getItems = () => {
    return keywordData.map(
      ({
        shareLocation,
        shareId,
        shareThumbnailImageUrl,
        shareTitle,
        notificationCreatedDateTime,
      }) => {
        const diffTime = moment(notificationCreatedDateTime).fromNow();

        return (
          <S.ItemWrapper key={shareId}>
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
          </S.ItemWrapper>
        );
      },
    );
  };

  const idList = contents.map(({ shareId }) => shareId);
  const items = getItems();

  return (
    <S.Wrapper>
      <NoticeDeleteAllButton idList={idList} />
      {items}
    </S.Wrapper>
  );
};

export default NoticeKeyword;
