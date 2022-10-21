import { useEffect, useState } from 'react';

import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import NoticeDeleteAllButton from '@components/NoticeDeleteAllButton';
import NoticeDeleteBtn from '@components/NoticeDeleteBtn';
import * as S from '@components/NoticeKeyword/NoticeKeyword.style';
import ImgContainer from '@components/common/ImgContainer';
import { newShareEnrolledMention, noRecentNoticeMention } from '@constants/mentions';
import { pathName } from '@constants/pathName';
import { newNoticeState, noticeStateTrigger } from '@store/notice';
import { getIsActivity, NoticeKeywordDataType } from '@type/notice';

const NoticeKeyword = ({ contents }: { contents: NoticeKeywordDataType[] }) => {
  const [keywordData, setKeywordData] = useState(contents);
  const navigate = useNavigate();
  const setNoticeStateTrigger = useSetRecoilState(noticeStateTrigger);
  const [newNotice, setNewNotice] = useRecoilState(newNoticeState);
  const idList = keywordData.map(({ id }) => id);
  const noRecentNotice = <S.NoRecentNoticeWrapper>{noRecentNoticeMention}</S.NoRecentNoticeWrapper>;

  const NoticeKeywordItem = ({
    id,
    shareLocation,
    shareId,
    shareThumbnailImageUrl,
    shareTitle,
    notificationCreatedDateTime,
  }: NoticeKeywordDataType) => {
    const diffTime = moment(notificationCreatedDateTime).add(9, 'h').fromNow();
    const handleClickItem = () => navigate(`${pathName.shareDetail}/${shareId}`);
    const onDeleteSuccess = (id: number) => {
      setKeywordData((data) => data.filter(({ id: dataId }) => dataId !== id));
    };

    return (
      <S.ItemWrapper onClick={handleClickItem}>
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
        <NoticeDeleteBtn id={id} onDeleteSuccess={onDeleteSuccess} />
      </S.ItemWrapper>
    );
  };

  const getItems = () => {
    const noticeItems = keywordData
      .map((info) => <NoticeKeywordItem {...info} key={getRandomKey()} />)
      .reverse();

    return keywordData.length ? noticeItems : noRecentNotice;
  };

  useEffect(() => {
    if (!newNotice) return;
    const isActivity = getIsActivity(newNotice);
    if (isActivity) return;

    setKeywordData((curData) => {
      const newData = [...curData];
      newData.push(newNotice);
      return newData;
    });
  }, [newNotice]);

  useEffect(() => {
    return () => {
      setNoticeStateTrigger((prev) => prev + 1);
      setNewNotice(null);
    };
  }, []);

  return (
    <S.Wrapper>
      <NoticeDeleteAllButton idList={idList} isList={!!contents.length} />
      {getItems()}
    </S.Wrapper>
  );
};

export default NoticeKeyword;
