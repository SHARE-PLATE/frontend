import { useRecoilState } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import { COMPANY, HOME } from '@constants/words';
import { addressRecentState } from '@store/localStorage';
import { setLocalStorageInfo } from '@utils/localStorage';

type UseSetHomeCompanyParams = {
  target: typeof HOME | typeof COMPANY;
  lat: string;
  lng: string;
  id?: string;
  road_address_name: string;
};

export const useSetHomeCompany = () => {
  const [addressRecent, setAddressRecent] = useRecoilState(addressRecentState); // 수정 필요

  return ({ target, lat, lng, road_address_name, id }: UseSetHomeCompanyParams) => {
    const newAddressRecent = new Map(addressRecent);
    newAddressRecent.set(target, {
      lat,
      lng,
      id: id || getRandomKey(),
      road_address_name,
    });

    setAddressRecent(newAddressRecent);
    setLocalStorageInfo({ key: 'addressRecent', info: [...newAddressRecent] });
  };
};
