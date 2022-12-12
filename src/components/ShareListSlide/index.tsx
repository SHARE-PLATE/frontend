import {
  MouseEvent,
  SetStateAction,
  TouchEvent,
  useRef,
  useState,
  Dispatch,
  useEffect,
} from 'react';

import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';

import Loading from '@components/Loading';
import PreviewShareListBigSizeImage from '@components/PreviewShareListBigSizeImage';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import * as S from '@components/ShareListSlide/ShareListSlide.style';
import Icon from '@components/common/Icon';
import { unexpectedErrorOccursMention } from '@constants/mentions';
import { AROUND_SHARE_LIST } from '@constants/words';
import { activeShareList } from '@store/filterShareList';
import { currentLatitudeLongitude } from '@store/location';
import { getShareListsData } from '@store/shareList';
import { mapLatitudeLongitudeState, clickedShareIdState } from '@store/shareMap';
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
  const [clickedShareId, setClickedShareId] = useRecoilState(clickedShareIdState);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const { clientY } = event.touches[0];
    if (!targetRef.current) targetRef.current = clientY;
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    const { clientY } = event.touches[0];
    const targetClientY = targetRef.current;
    const distanceDiff = targetClientY - clientY;

    if (slidePosition === 'clicked') {
      setSlidePosition('bottom');
      setClickedShareId(null);
      return;
    }
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
    if (distanceDiff < 0 && slidePosition === 'clicked') {
      setSlidePosition('bottom');
      setClickedShareId(null);
    }
    if (!!distanceDiff) mouseMovingRef.current = false;
  };

  const handleMouseOut = () => {
    if (slidePosition === 'clicked') return;
    mouseMovingRef.current = false;
    targetRef.current = 0;
  };

  const handleClick = () => {
    if (slidePosition === 'bottom') setSlidePosition('middle');
    if (slidePosition === 'middle') setSlidePosition('top');
    if (slidePosition === 'top') setSlidePosition('bottom');
    if (slidePosition === 'clicked') {
      setSlidePosition('bottom');
      setClickedShareId(null);
    }
  };

  const getListContent = () => {
    switch (state) {
      case 'hasValue':
        if (!contents.data) return <S.Error>{unexpectedErrorOccursMention}</S.Error>;

        const { data } = contents;
        const sortedData = getSortData('recency', data);
        const clickedData = sortedData.find((value) => value.id === clickedShareId);
        const isClicked = clickedShareId !== null && !!clickedData;

        // when clicked share is none
        if (!clickedData && clickedShareId !== null) {
          return <S.Error>불러올 쉐어가 없습니다!</S.Error>;
        }

        return (
          <ListContentComponent
            data={isClicked ? [clickedData] : sortedData}
            isSingle={isClicked}
          />
        );

      case 'loading':
        return <Loading border={5} size={40} color='grey4' height='100px' />;
      case 'hasError':
        return <S.Error>불러올 쉐어가 없습니다!</S.Error>;
    }
  };

  // manage when slide position change event occurs
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

  // manage when background is showed or not
  useEffect(() => {
    if (!isActive) {
      setSlidePosition('bottom');
      return;
    }
    if (slidePosition === 'clicked') setClickedShareId(null);
    if (slidePosition !== 'middle') setSlidePosition('top');
  }, [isActive]);

  // manage rotate animation
  useEffect(() => {
    if (state !== 'loading') {
      setSlidePosition('bottom');
      setTimeout(() => setIsRotated(false), 900);
    } else {
      setIsRotated(true);
    }
  }, [state]);

  // manage when map icon clicked
  useEffect(() => {
    if (clickedShareId !== null) setSlidePosition('clicked');
  }, [clickedShareId]);

  // manage when tabs clickedx
  useEffect(() => {
    if (clickedShareId === null) return;
    setClickedShareId(null);
    setSlidePosition('bottom');
  }, [activeShareListValue]);

  return (
    <S.Wrapper slidePositionType={slidePosition} activeShareList={activeShareListValue}>
      <S.IconWrapper
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseOut}
        onMouseLeave={handleMouseOut}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        isBottom={slidePosition === 'bottom'}
      >
        <Icon iconName={'OnClickBar'} iconSize={2.5} />
      </S.IconWrapper>

      {clickedShareId === null && (
        <S.Title ref={titleRef} isRotated={isRotated}>
          {AROUND_SHARE_LIST}
          <Icon iconName='Refresh' iconSize={1} />
        </S.Title>
      )}
      <S.ListContent>{getListContent()}</S.ListContent>
    </S.Wrapper>
  );
};

export default ShareListSlide;
