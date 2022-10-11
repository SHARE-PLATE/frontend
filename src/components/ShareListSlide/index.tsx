import {
  MouseEvent,
  SetStateAction,
  TouchEvent,
  useRef,
  useState,
  Dispatch,
  useEffect,
} from 'react';

import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import PreviewShareListBigSizeImage from '@components/PreviewShareListBigSizeImage';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import * as S from '@components/ShareListSlide/ShareListSlide.style';
import Icon from '@components/common/Icon';
import { AROUND_SHARE_LIST } from '@constants/words';
import { activeShareList } from '@store/filterShareList';
import { currentLatitudeLongitude } from '@store/location';
import { getShareListsData } from '@store/shareList';
import { mapLatitudeLongitudeState } from '@store/shareMap';
import { getSortData } from '@utils/ShareListSort';

interface ShareListSlidePropsType {
  setIsActive: Dispatch<SetStateAction<boolean>>;
  isActive: boolean;
}

const ListContentComponentInfo = {
  delivery: PreviewShareListBigSizeImage,
  ingredient: PreviewShareListLeftImage,
};

const ShareListSlide = ({ isActive, setIsActive }: ShareListSlidePropsType) => {
  const activeShareListValue = useRecoilValue(activeShareList);
  const curLatitudeLongitude = useRecoilValue(currentLatitudeLongitude);
  const mapLatitudeLongitude = useRecoilValue(mapLatitudeLongitudeState);
  const { lat, lng } = mapLatitudeLongitude || curLatitudeLongitude;
  const { state, contents } = useRecoilValueLoadable(
    getShareListsData({ newLatitudeLongitude: { lat, lng } }),
  );
  const ListContentComponent = ListContentComponentInfo[activeShareListValue];
  const [slidePosition, setSlidePosition] = useState<S.SlidePositionType>('bottom');
  const mouseMovingRef = useRef(false);
  const targetRef = useRef(0);
  const startRef = useRef(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const [isRotated, setIsRotated] = useState(true);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const { clientY } = event.touches[0];
    if (!targetRef.current) targetRef.current = clientY;
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    const { clientY } = event.touches[0];
    const targetClientY = targetRef.current;
    const distanceDiff = targetClientY - clientY;

    if (distanceDiff > 150) setSlidePosition('middle');
    if (distanceDiff > 300) setSlidePosition('top');
    if (distanceDiff < 50) setSlidePosition('bottom');
  };

  const handleMouseDown = ({ clientY }: MouseEvent<HTMLDivElement>) => {
    targetRef.current = clientY;
    mouseMovingRef.current = true;
  };

  const handleMouseMove = ({ clientY }: MouseEvent<HTMLDivElement>) => {
    if (!mouseMovingRef.current) return;

    const targetClientY = targetRef.current;
    const distanceDiff = targetClientY - clientY;

    if (distanceDiff > 0 && slidePosition === 'bottom') setSlidePosition('middle');
    if (distanceDiff > 0 && slidePosition === 'middle') setSlidePosition('top');
    if (distanceDiff < 0 && slidePosition === 'top') setSlidePosition('middle');
    if (distanceDiff < 0 && slidePosition === 'middle') setSlidePosition('bottom');
    if (!!distanceDiff) mouseMovingRef.current = false;
  };

  const handleMouseOut = () => {
    mouseMovingRef.current = false;
    targetRef.current = 0;
  };

  const handleClick = () => {
    if (slidePosition === 'bottom') setSlidePosition('middle');
    if (slidePosition === 'middle') setSlidePosition('top');
    if (slidePosition === 'top') setSlidePosition('bottom');
  };

  const getListContent = () => {
    switch (state) {
      case 'hasValue':
        if (!contents) return;
        return <ListContentComponent data={getSortData('recency', contents)} />;
      case 'loading':
        return <div>로딩 페이지</div>;
      case 'hasError':
        return <div>에러 페이지</div>;
    }
  };

  useEffect(() => {
    if (slidePosition === 'bottom') {
      setIsActive(false);
      if (!startRef.current) {
        startRef.current = true;
      } else {
        titleRef.current?.scrollIntoView({ block: 'end' });
      }
    }
    if (slidePosition === 'middle' || slidePosition === 'top') setIsActive(true);
  }, [slidePosition]);

  useEffect(() => {
    if (isActive && slidePosition === 'bottom') setSlidePosition('top');
    if (!isActive) setSlidePosition('bottom');
  }, [isActive]);

  useEffect(() => {
    if (state !== 'loading') {
      setTimeout(() => setIsRotated(false), 900);
    } else {
      setIsRotated(true);
    }
  }, [state]);

  return (
    <S.Wrapper slidePositionType={slidePosition}>
      <S.IconWrapper
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseOut}
        onMouseLeave={handleMouseOut}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        isActive={isActive}
      >
        <Icon iconName={'OnClickBar'} iconSize={2.5} />
      </S.IconWrapper>
      <S.Title ref={titleRef} isRotated={isRotated}>
        {AROUND_SHARE_LIST}
        <Icon iconName='Refresh' iconSize={1} />
      </S.Title>
      <S.ListContent>{getListContent()}</S.ListContent>
    </S.Wrapper>
  );
};

export default ShareListSlide;
