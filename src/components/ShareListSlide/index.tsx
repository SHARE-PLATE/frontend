import { MouseEvent, SetStateAction, TouchEvent, useRef } from 'react';
import { useState } from 'react';
import { Dispatch } from 'react';
import { useEffect } from 'react';

import { useRecoilValue } from 'recoil';

import PreviewShareListBigSizeImage from '@components/PreviewShareListBigSizeImage';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import * as S from '@components/ShareListSlide/ShareListSlide.style';
import Icon from '@components/common/Icon';
import { AROUND_SHARE_LIST } from '@constants/words';
import { activeShareList } from '@store/filterShareList';
import { ShareListType } from '@type/shareList';
import { getSortData } from '@utils/ShareListSort';

interface ShareListSlidePropsType {
  data: ShareListType[];
  setIsActive: Dispatch<SetStateAction<boolean>>;
  isActive: boolean;
}

const ListContentComponentInfo = {
  delivery: PreviewShareListBigSizeImage,
  ingredient: PreviewShareListLeftImage,
};

const ShareListSlide = ({ isActive, data, setIsActive }: ShareListSlidePropsType) => {
  const activeShareListValue = useRecoilValue(activeShareList);
  const ListContentComponent = ListContentComponentInfo[activeShareListValue];
  const [slidePosition, setSlidePosition] = useState<S.SlidePositionType>('bottom');
  const mouseMovingRef = useRef(false);
  const targetRef = useRef(0);
  const titleRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (slidePosition === 'bottom') {
      setIsActive(false);
      titleRef.current?.scrollIntoView({ block: 'end' });
    }
    if (slidePosition === 'middle' || slidePosition === 'top') setIsActive(true);
  }, [slidePosition]);

  useEffect(() => {
    if (isActive && slidePosition === 'bottom') setSlidePosition('top');
    if (!isActive) setSlidePosition('bottom');
  }, [isActive]);

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
      <S.Title ref={titleRef}>{AROUND_SHARE_LIST}</S.Title>
      <S.ListContent>
        <ListContentComponent data={getSortData('recency', data)} />
      </S.ListContent>
    </S.Wrapper>
  );
};

export default ShareListSlide;
