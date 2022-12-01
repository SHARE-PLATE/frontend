import { atom, selectorFamily } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import { getShareDetailData } from '@api/shareList';
import { ShareDetailType } from '@type/shareList';

export type RecruitmentType =
  | Pick<
      ShareDetailType,
      | 'recruitmentMemberThumbnailImageUrls'
      | 'currentRecruitment'
      | 'finalRecruitment'
      | 'wishCount'
    >
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
      get(shareDetailTrigger);
      get(recruitmentTrigger);
      const shareDetailData = await getShareDetailData({ id });
      if (!shareDetailData || typeof shareDetailData === 'string') return;
      const {
        recruitmentMemberThumbnailImageUrls,
        currentRecruitment,
        finalRecruitment,
        wishCount,
      } = shareDetailData;
      return {
        recruitmentMemberThumbnailImageUrls,
        currentRecruitment,
        finalRecruitment,
        wishCount,
      };
    },
});

export const isEntryState = atom<boolean | null>({
  key: 'isEntry',
  default: null,
});
