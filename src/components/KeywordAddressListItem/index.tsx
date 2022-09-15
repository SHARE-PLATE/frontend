import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { AddressListType, getRegionWithGeo } from '@api/address';
import * as S from '@components/KeywordAddressListItem/KeywordAddressListItem.style';
import { JIBUN } from '@constants/words';
import { portalState } from '@store/portal';

const KeywordAddressListItem = ({ place_name, address_name, x, y }: AddressListType) => {
  if (!address_name) return <></>;

  const [regionName, setRegionName] = useState('');
  const setPortal = useSetRecoilState(portalState);
  const navigator = useNavigate();

  useEffect(() => {
    (async () => {
      const { region_3depth_name, region_4depth_name } = await getRegionWithGeo({ x: x, y: y });

      if (region_4depth_name) return setRegionName(region_4depth_name);
      else return setRegionName(region_3depth_name);
    })();
  }, [x, y]);

  const addressClickHandler = () => {
    navigator('/profile/keyword/add-keyword', {
      state: { place_name: place_name, regionName: regionName, x: x, y: y },
    });
    setPortal(null);
  };

  return (
    <S.Wrapper onClick={addressClickHandler}>
      {place_name}
      <S.RoadName>
        <div>{JIBUN}</div>
        <div>{address_name}</div>
      </S.RoadName>
    </S.Wrapper>
  );
};

export default KeywordAddressListItem;
