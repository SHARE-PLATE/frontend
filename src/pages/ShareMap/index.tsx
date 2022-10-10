import { useState } from 'react';

import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import MapArea from '@components/MapArea';
import ShareListSlide from '@components/ShareListSlide';
import ShareMapHeader from '@components/ShareMapHeader';
import Tabs from '@components/Tabs';
import Icon from '@components/common/Icon';
import useShareListTabsInfo from '@hooks/useShareListTabsInfo';
import * as S from '@pages/ShareMap/ShareMap.style';
import { activeShareList, activeShareListType } from '@store/filterShareList';
import { currentAddressName, currentLatitudeLongitude } from '@store/location';
import { getShareListsData } from '@store/shareList';
import { getSortData } from '@utils/ShareListSort';

const ShareMap = () => {
  const shareListTabsInfo = useShareListTabsInfo();
  const curAddressName = useRecoilValue(currentAddressName);
  const { lat, lng } = useRecoilValue(currentLatitudeLongitude);
  const { state, contents } = useRecoilValueLoadable(getShareListsData);
  const [isActive, setIsActive] = useState(false);

  const getContents = (state: 'hasValue' | 'loading' | 'hasError') => {
    switch (state) {
      case 'hasValue':
        const data = getSortData('recency', contents);
        return (
          <>
            <MapArea lat={+lat} lng={+lng} data={data} />
            <ShareListSlide contents={data} />
          </>
        );
      case 'loading':
        return <div>로딩 페이지</div>;
      case 'hasError':
        return <div>에러 페이지</div>;
    }
  };

  return (
    <S.Wrapper>
      <S.ListHeader>
        <ShareMapHeader />
        <S.TabsWrapper>
          <Tabs<activeShareListType> tabsInfo={shareListTabsInfo} targetAtom={activeShareList} />
        </S.TabsWrapper>
        <S.CurrentAddress>
          <Icon iconName='LocationMarker' />
          <S.AddressText>{curAddressName}</S.AddressText>
        </S.CurrentAddress>
      </S.ListHeader>
      {getContents(state)}
    </S.Wrapper>
  );
};

export default ShareMap;
