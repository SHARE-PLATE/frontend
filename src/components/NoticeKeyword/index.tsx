import { useEffect, useState } from 'react';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import NoticeDeleteAllButton from '@components/NoticeDeleteAllButton';
import * as S from '@components/NoticeKeyword/NoticeKeyword.style';
import { noRecentNoticeMention } from '@constants/mentions';
import { newNoticeState, noticeStateTrigger } from '@store/notice';
import { getIsActivity, NoticeKeywordDataType } from '@type/notice';

import NoticeKeywordItem from './NoticeKeywordItem';

const NoticeKeyword = ({ contents }: { contents: NoticeKeywordDataType[] }) => {
  const [keywordData, setKeywordData] = useState(contents);
  const setNoticeStateTrigger = useSetRecoilState(noticeStateTrigger);
  const [newNotice, setNewNotice] = useRecoilState(newNoticeState);
  const idList = keywordData.map(({ id }) => id);
  const noRecentNotice = <S.NoRecentNoticeWrapper>{noRecentNoticeMention}</S.NoRecentNoticeWrapper>;

  const onDeleteSuccess = (id: number) => {
    setKeywordData((data) => data.filter(({ id: dataId }) => dataId !== id));
  };

  const getItems = () => {
    const noticeItems = keywordData
      .map((info) => (
        <NoticeKeywordItem {...info} key={getRandomKey()} onDeleteSuccess={onDeleteSuccess} />
      ))
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
