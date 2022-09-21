import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import MapArea from '@components/MapArea';
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

  const getListContents = (state: 'hasValue' | 'loading' | 'hasError') => {
    switch (state) {
      case 'hasValue':
        return <MapArea lat={+lat} lng={+lng} data={getSortData('recency', contents)} />;
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
      {getListContents(state)}
    </S.Wrapper>
  );
};

export default ShareMap;
