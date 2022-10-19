import { useState } from 'react';

import moment from 'moment';

import NoticeDeleteAllButton from '@components/NoticeDeleteAllButton';
import NoticeDeleteBtn from '@components/NoticeDeleteBtn';
import * as S from '@components/NoticeKeyword/NoticeKeyword.style';
import ImgContainer from '@components/common/ImgContainer';
import { newShareEnrolledMention } from '@constants/mentions';
import { NoticeKeywordDataType } from '@type/notice';

const NoticeKeyword = ({ contents }: { contents: NoticeKeywordDataType[] }) => {
  const [keywordData, setKeywordData] = useState(contents);
  const NoticeKeywordItem = ({
    shareLocation,
    shareId,
    shareThumbnailImageUrl,
    shareTitle,
    notificationCreatedDateTime,
  }: NoticeKeywordDataType) => {
    const diffTime = moment(notificationCreatedDateTime).add(9, 'h').fromNow();

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
        <NoticeDeleteBtn id={shareId} />
      </S.ItemWrapper>
    );
  };

  const getItems = () => {
    return keywordData.map((info) => <NoticeKeywordItem {...info} />);
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
