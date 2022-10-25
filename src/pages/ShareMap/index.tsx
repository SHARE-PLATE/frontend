import { useRef, useState } from 'react';
import { useEffect } from 'react';

import { useRecoilValue, useResetRecoilState } from 'recoil';

import ShareFormButton from '@components/ShareFormButton';
import ShareListSlide from '@components/ShareListSlide';
import ShareMapArea from '@components/ShareMapArea';
import ShareMapHeader from '@components/ShareMapHeader';
import Tabs from '@components/Tabs';
import Icon from '@components/common/Icon';
import useShareListTabsInfo from '@hooks/useShareListTabsInfo';
import * as S from '@pages/ShareMap/ShareMap.style';
import { activeShareList, activeShareListType } from '@store/filterShareList';
import { currentAddressName } from '@store/location';
import { mapLatitudeLongitudeState } from '@store/shareMap';

const ShareMap = () => {
  const shareListTabsInfo = useShareListTabsInfo();
  const curAddressName = useRecoilValue(currentAddressName);
  const resetMapLatitudeLongitude = useResetRecoilState(mapLatitudeLongitudeState);
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

  useEffect(() => {
    if (isActive) changeBackgroundDisplay({ isShowed: true });
  }, [isActive]);

  useEffect(() => {
    return () => resetMapLatitudeLongitude();
  }, []);

  return (
    <S.Wrapper>
      <S.InactiveBackground
        ref={backgroundRef}
        isActive={isActive}
        onAnimationEnd={handleBackgroundAnimationEnd}
        onClick={handleBackgroundClick}
      />
      <S.ListHeader>
        <ShareMapHeader isActive={isActive} />
        <S.TabsWrapper>
          <Tabs<activeShareListType> tabsInfo={shareListTabsInfo} targetAtom={activeShareList} />
        </S.TabsWrapper>
        <S.CurrentAddress>
          <Icon iconName='LocationMarker' />
          <S.AddressText>{curAddressName}</S.AddressText>
        </S.CurrentAddress>
      </S.ListHeader>
      <S.MapListWrapper>
        <ShareFormButton />
        <ShareMapArea />
        <ShareListSlide setIsActive={setIsActive} isActive={isActive} />
      </S.MapListWrapper>
    </S.Wrapper>
  );
};

export default ShareMap;
