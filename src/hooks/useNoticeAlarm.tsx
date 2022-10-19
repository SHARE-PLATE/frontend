import { useEffect } from 'react';

import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import StompJs from 'stompjs';

import { noticeSocket } from '@socket/noticeSocket';
import { getKeywordListsData } from '@store/keyword';
import { newNoticeState } from '@store/notice';
import { shareListEntriesState } from '@store/shareList';

const useNoticeAlarm = () => {
  const { state: entriesState, contents: entriesContents } =
    useRecoilValueLoadable(shareListEntriesState);
  const { state: keywordsState, contents: keywordsContents } =
    useRecoilValueLoadable(getKeywordListsData);
  const setNewNotice = useSetRecoilState(newNoticeState);
  const { connectNotice } = noticeSocket();

  const onSubscribeEntries = (entryData: StompJs.Message) => {
    const newEntryData = JSON.parse(entryData.body);
    setNewNotice({ ...newEntryData, type: 'activity' });
  };

  const onSubscribeKeywords = (keywordData: StompJs.Message) => {
    const newKeywordData = JSON.parse(keywordData.body);
    setNewNotice({ ...newKeywordData, type: 'keyword' });
  };

  return () =>
    useEffect(() => {
      if (entriesState !== 'hasValue' || !entriesContents) return;
      if (keywordsState !== 'hasValue' || !keywordsContents) return;
      const entryIds = entriesContents.idList;
      const keywordIds = keywordsContents
        .map(({ keywords }) => keywords.map(({ id }) => id))
        .flat();

      connectNotice({
        entryIds,
        keywordIds,
        onSubscribeEntries,
        onSubscribeKeywords,
      });
    }, [entriesState, keywordsState]);
};

export default useNoticeAlarm;
