import { useSetRecoilState } from 'recoil';
import StompJs from 'stompjs';

import { newNoticeState } from '@store/notice';

export const useUpdateNotice = () => {
  const setNewNotice = useSetRecoilState(newNoticeState);

  return (noticeData: StompJs.Message) => {
    const newEntryData = JSON.parse(noticeData.body);
    setNewNotice(newEntryData);
  };
};
