import { atom, selector, selectorFamily } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import { ActiveNoticeType, getNotice, GetNoticeParamsType } from '@api/notice';
import { TabsInfoType } from '@components/Tabs';
import { ACTIVITY } from '@constants/words';

export const activeNoticeState = atom<ActiveNoticeType>({
  key: 'activeNoticeState',
  default: ACTIVITY,
});

export const noticeInfoState = selector<TabsInfoType<ActiveNoticeType>>({
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

export const noticeState = selectorFamily({
  key: `GET/noticeState/${getRandomKey()}`,
  get:
    <T extends ActiveNoticeType>({ type }: GetNoticeParamsType) =>
    async ({ get }) => {
      get(noticeStateTrigger);
      const noticeActivityData = await getNotice<T>({ type });
      return noticeActivityData;
    },
});

export const deleteModeState = atom<boolean>({
  key: 'deleteMode',
  default: false,
});
