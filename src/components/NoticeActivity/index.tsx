import { useEffect, useState } from 'react';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import * as S from '@components/NoticeActivity/NoticeActivity.style';
import NoticeDeleteAllButton from '@components/NoticeDeleteAllButton';
import { noRecentNoticeMention } from '@constants/mentions';
import { newNoticeState, noticeStateTrigger } from '@store/notice';
import { getIsActivity, NoticeActivityDataType } from '@type/notice';

import NoticeActivityItem from './NoticeActivityItem';

const NoticeActivity = ({ contents }: { contents: NoticeActivityDataType[] }) => {
  const [activityData, setActivityData] = useState(contents);
  const setNoticeStateTrigger = useSetRecoilState(noticeStateTrigger);
  const [newNotice, setNewNotice] = useRecoilState(newNoticeState);
  const idList = activityData.map(({ id }) => id);
  const noRecentNotice = <S.NoRecentNoticeWrapper>{noRecentNoticeMention}</S.NoRecentNoticeWrapper>;

  const onDeleteSuccess = (id: number) => {
    setActivityData((data) => data.filter(({ id: dataId }) => dataId !== id));
  };

  const getContent = () => {
    const noticeItems = activityData
      .map((info) => (
        <NoticeActivityItem {...info} key={getRandomKey()} onDeleteSuccess={onDeleteSuccess} />
      ))
      .reverse();

    return activityData.length ? noticeItems : noRecentNotice;
  };

  useEffect(() => {
    if (!newNotice) return;
    const isActivity = getIsActivity(newNotice);
    if (!isActivity) return;

    setActivityData((curData) => {
      const newData = [...curData];
      newData.push(newNotice);
      return newData;
    });
  }, [newNotice]);

  // set notice icon show that new notice doesn't exist
  useEffect(() => {
    return () => {
      setNewNotice(null);
      setNoticeStateTrigger((prev) => prev + 1);
    };
  }, []);

  return (
    <S.Wrapper>
      <NoticeDeleteAllButton idList={idList} isList={!!activityData.length} />
      {getContent()}
    </S.Wrapper>
  );
};

export default NoticeActivity;
