import { atom, selector } from 'recoil';

import { ActiveNoticetype, getNoticeActivity, getNoticeKeyword } from '@api/notice';
import { TabsInfoType } from '@components/Tabs';
import { ACTIVITY } from '@constants/words';

export const activeNoticeState = atom<ActiveNoticetype>({
  key: 'activeNoticeState',
  default: ACTIVITY,
});

export const noticeInfoState = selector<TabsInfoType<ActiveNoticetype>>({
  key: 'noticeInfoState',
  get: ({ get }) => {
    const activeNotice = get(activeNoticeState);

    return [
      { order: 0, title: '활동 알림', value: 'activity', active: activeNotice === 'activity' },
      { order: 1, title: '키워드 알림', value: 'keyword', active: activeNotice === 'keyword' },
    ];
  },
});

export const noticeStateTrigger = atom<number>({
  key: 'noticeActivityStateTrigger',
  default: 0,
});

export const noticeActivityState = selector({
  key: `GET/noticeActivityState`,
  get: async ({ get }) => {
    get(noticeStateTrigger);
    const noticeActivityData = await getNoticeActivity();
    return noticeActivityData;
  },
});

export const noticeKeywordState = selector({
  key: `GET/noticeKeywordState`,
  get: async ({ get }) => {
    get(noticeStateTrigger);
    const noticeActivityData = await getNoticeKeyword();
    return noticeActivityData;
  },
});
