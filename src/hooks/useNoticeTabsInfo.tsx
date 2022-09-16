import { useRecoilValue } from 'recoil';

import { ActiveNoticetype } from '@api/notice';
import { TabsInfoType } from '@components/Tabs';
import { activeNoticeState } from '@store/notice';

const useNoticeTabsInfo = () => {
  const activeNotice = useRecoilValue(activeNoticeState);
  const noticeTabsInfo: TabsInfoType<ActiveNoticetype> = [
    { order: 0, title: '활동 알림', value: 'activity', active: activeNotice === 'activity' },
    { order: 1, title: '키워드 알림', value: 'keyword', active: activeNotice === 'keyword' },
  ];

  return { noticeTabsInfo, activeNoticeState };
};

export default useNoticeTabsInfo;
