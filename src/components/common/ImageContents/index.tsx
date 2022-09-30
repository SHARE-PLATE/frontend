import { useState, useEffect, MouseEvent } from 'react';

import ExpirationDate from '@components/ExpirationDate';
import { RemainedTime } from '@components/RemainedTime';
import WishHeart from '@components/WishHeart';

interface ImageContentsPropsType {
  dateTime: string;
  isDone?: boolean;
  isWish?: boolean;
  id?: number;
  isEmptyHeart?: boolean;
  wishListClickHandler?: (e: MouseEvent, id: number) => void;
}

const ImageContents = ({
  isDone,
  isWish,
  dateTime,
  wishListClickHandler,
  id,
  isEmptyHeart,
}: ImageContentsPropsType) => {
  const [currentKey, setCurrentKey] = useState<string>('');

  useEffect(() => {
    if (isDone && isWish) return setCurrentKey('done_wish');
    if (isDone) return setCurrentKey('done');
    if (isWish) return setCurrentKey('wish');
    setCurrentKey('');
  }, [isDone, isWish]);

  switch (currentKey) {
    case 'done_wish':
      return (
        <>
          <WishHeart
            type='delivery'
            id={id}
            isEmptyHeart={isEmptyHeart}
            clickHandler={wishListClickHandler}
          />
          <ExpirationDate />
        </>
      );

    case 'done':
      return <ExpirationDate />;

    case 'wish':
      return (
        <>
          <WishHeart
            type='delivery'
            id={id}
            isEmptyHeart={isEmptyHeart}
            clickHandler={wishListClickHandler}
          />
          <RemainedTime targetTime={dateTime} position={{ top: '0.375rem', left: '0.375rem' }} />
        </>
      );

    default:
      return (
        <RemainedTime targetTime={dateTime} position={{ top: '0.375rem', left: '0.375rem' }} />
      );
  }
};

export default ImageContents;
