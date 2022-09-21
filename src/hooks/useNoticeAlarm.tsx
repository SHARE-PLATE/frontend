import { useEffect } from 'react';

import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import { noticeSocket } from '@socket/noticeSocket';
import { newNoticeState } from '@store/notice';
import { shareListEntriesState } from '@store/shareList';

const useNoticeAlarm = () => {
  const { state: entriesState, contents: entriesContents } =
    useRecoilValueLoadable(shareListEntriesState);
  const setNewNotice = useSetRecoilState(newNoticeState);
  const { connectNotice } = noticeSocket({ setter: setNewNotice });

  return () =>
    useEffect(() => {
      if (entriesState !== 'hasValue') return;
      connectNotice({ entryIds: entriesContents?.idList, keywordIds: [] });
    }, [entriesState]);
};

export default useNoticeAlarm;
