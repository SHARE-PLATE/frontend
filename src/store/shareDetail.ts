import { atom, selector, selectorFamily } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import { getShareDetailData, getShareListWriterData } from '@api/shareList';
import { getShareListRecommendedData } from '@api/shareRecommended';
import { currentLatitudeLongitude } from '@store/location';
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

export const shareDetailWriterState = atom<string | null>({
  key: `shareDetailWriterState`,
  default: null,
});

export const shareDetailTrigger = atom<number>({
  key: `shareDetailTrigger`,
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

export const writerDataState = selectorFamily({
  key: `GET/writerDataState/${getRandomKey()}`,
  get:
    ({ id }: { id: string }) =>
    async ({ get }) => {
      const { isSuccess, data } = get(shareDetailState({ id }));
      if (!isSuccess || !data) return;

      const { writerId } = data;
      const writerData = await getShareListWriterData({ writerId });

      return writerData;
    },
});

export const recommandedDataState = selector({
  key: 'recommandedDataState',
  get: async ({ get }) => {
    const { lat, lng } = get(currentLatitudeLongitude);
    const recommendedData = await getShareListRecommendedData(lat, lng);
    return recommendedData;
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
      if (!shareDetailData || !shareDetailData.isSuccess || !shareDetailData.data) return;
      const {
        recruitmentMemberThumbnailImageUrls,
        currentRecruitment,
        finalRecruitment,
        wishCount,
      } = shareDetailData.data;
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
