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
  road_address_name: string;
};

export const useSetHomeCompany = () => {
  const [addressRecent, setAddressRecent] = useRecoilState(addressRecentState); // 수정 필요

  return ({ target, lat, lng, place_name, id, road_address_name }: UseSetHomeCompanyParams) => {
    const newAddressRecent = new Map(addressRecent);
    newAddressRecent.set(target, {
      lat,
      lng,
      id: id || getRandomKey(),
      place_name,
      road_address_name,
    });

    setAddressRecent(newAddressRecent);
    setLocalStorageInfo({ key: ADDRESS_RECENT, info: [...newAddressRecent] });
  };
};
