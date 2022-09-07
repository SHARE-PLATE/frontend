import { useRecoilState } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import { ADDRESS_RECENT, COMPANY, HOME } from '@constants/words';
import { addressRecentState } from '@store/localStorage';
import { setLocalStorageInfo } from '@utils/localStorage';

type UseSetHomeCompanyParams = {
  target: typeof HOME | typeof COMPANY;
  lat: string | number;
  lng: string | number;
  id?: string;
  place_name: string;
};

export const useSetHomeCompany = () => {
  const [addressRecent, setAddressRecent] = useRecoilState(addressRecentState); // 수정 필요

  return ({ target, lat, lng, place_name, id }: UseSetHomeCompanyParams) => {
    const newAddressRecent = new Map(addressRecent);
    newAddressRecent.set(target, {
      lat,
      lng,
      id: id || getRandomKey(),
      place_name,
    });

    setAddressRecent(newAddressRecent);
    setLocalStorageInfo({ key: ADDRESS_RECENT, info: [...newAddressRecent] });
  };
};
