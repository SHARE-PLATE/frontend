import { atom, selectorFamily } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import { getShareDetailData } from '@api/shareList';

export type RecruitmentType =
  | {
      recruitmentMemberThumbnailImageUrls: string[];
      currentRecruitment: number;
      finalRecruitment: number;
    }
  | undefined;

export const shareDetailTrigger = atom<number>({
  key: `shareListTrigger`,
  default: 0,
});

export const shareDetailState = selectorFamily({
  key: `GET/shareDetailState/${getRandomKey()}`,
  get:
    ({ id }: { id: string }) =>
    async ({ get }) => {
      get(shareDetailTrigger);
      const shareDetailData = await getShareDetailData({ id });
      return shareDetailData;
    },
});

export const recruitmentTrigger = atom<number>({
  key: `recruitmentTrigger`,
  default: 0,
});

export const recruitmentState = selectorFamily<RecruitmentType, string>({
  key: `GET/recruitmentState/${getRandomKey()}`,
  get:
    (id: string) =>
    async ({ get }) => {
      // get(shareDetailTrigger);
      get(recruitmentTrigger);
      const shareDetailData = await getShareDetailData({ id });
      if (!shareDetailData || typeof shareDetailData === 'string') return;
      const { recruitmentMemberThumbnailImageUrls, currentRecruitment, finalRecruitment } =
        shareDetailData;
      return { recruitmentMemberThumbnailImageUrls, currentRecruitment, finalRecruitment };
    },
});

export const isEntryState = atom<boolean | null>({
  key: 'isEntry',
  default: null,
});

export const isWishedState = atom<boolean | null>({
  key: 'isWished',
  default: null,
});
