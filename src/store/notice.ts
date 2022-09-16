import { atom, selector } from 'recoil';

import { ActiveNoticetype, getNoticeActivity, getNoticeKeyword } from '@api/notice';
import { ACTIVITY } from '@constants/words';

export const activeNoticeState = atom<ActiveNoticetype>({
  key: 'activeNoticeState',
  default: ACTIVITY,
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
