import { useRef, useState } from 'react';
import { useEffect } from 'react';

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
  const backgroundRef = useRef<HTMLDivElement>(null);

  const changeBackgroundDisplay = ({ isShowed }: { isShowed: boolean }) => {
    const background = backgroundRef.current;
    if (background) background.style.display = isShowed ? 'block' : 'none';
  };

  const handleBackgroundAnimationEnd = () => {
    if (!isActive) changeBackgroundDisplay({ isShowed: false });
  };

  const handleBackgroundClick = () => {
    setIsActive(false);
  };

  const getMapContents = () => {
    switch (state) {
      case 'hasValue':
        if (!contents) return <div>에러 페이지</div>;
        const data = getSortData('recency', contents);
        return (
          <S.MapListWrapper>
            <MapArea lat={+lat} lng={+lng} data={data} />
            <ShareListSlide data={data} setIsActive={setIsActive} isActive={isActive} />
          </S.MapListWrapper>
        );
      case 'loading':
        return <div>로딩 페이지</div>;
      case 'hasError':
        return <div>에러 페이지</div>;
    }
  };

  const mapContents = getMapContents();

  useEffect(() => {
    if (isActive) changeBackgroundDisplay({ isShowed: true });
  }, [isActive]);

  return (
    <S.Wrapper>
      <S.InactiveBackground
        ref={backgroundRef}
        isActive={isActive}
        onAnimationEnd={handleBackgroundAnimationEnd}
        onClick={handleBackgroundClick}
      />
      <S.ListHeader>
        <ShareMapHeader setIsActive={setIsActive} isActive={isActive} />
        <S.TabsWrapper>
          <Tabs<activeShareListType> tabsInfo={shareListTabsInfo} targetAtom={activeShareList} />
        </S.TabsWrapper>
        <S.CurrentAddress>
          <Icon iconName='LocationMarker' />
          <S.AddressText>{curAddressName}</S.AddressText>
        </S.CurrentAddress>
      </S.ListHeader>
      {mapContents}
    </S.Wrapper>
  );
};

export default ShareMap;
