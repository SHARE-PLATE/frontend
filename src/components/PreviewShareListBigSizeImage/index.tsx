import { MouseEvent } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { v4 as createRandomKey } from 'uuid';

import * as S from '@components/PreviewShareListBigSizeImage/PreviewShareListBigSizeImage.style';
import ImageContents from '@components/common/ImageContents';
import ImgContainer from '@components/common/ImgContainer';
import PersonnelStatus from '@components/common/PersonnelStatus';
import { pathName } from '@constants/pathName';
import { clickedHeartId } from '@store/meyMenu';
import { ShareListType } from '@type/shareList';
import { getPriceType } from '@utils/getPriceType';
import { calcTwoTimeDifference } from '@utils/getTimeDiff';

interface PreviewShareListBigSizeImagePropsType {
  isDone?: boolean;
  isWish?: boolean;
  isSingle?: boolean;
  data: ShareListType[];
}

const PreviewShareListBigSizeImage = ({
  data,
  isDone,
  isWish,
  isSingle = false,
}: PreviewShareListBigSizeImagePropsType) => {
  const navigate = useNavigate();
  const [heartIdArr, setHeartIdArr] = useRecoilState<number[]>(clickedHeartId);

  const clickHeartHandler = (e: MouseEvent, id: number) => {
    e.stopPropagation();
    if (!heartIdArr.length) return setHeartIdArr([id]);
    if (!heartIdArr.includes(id)) return setHeartIdArr([...heartIdArr, id]);

    const filterArr = heartIdArr.filter((el: number) => el !== id);
    return setHeartIdArr(filterArr);
  };

  const handleClickShareList = ({ id, writerId }: { id: number; writerId: string }) =>
    navigate(`${pathName.shareDetail}/${id}`, { state: { writerId } });

  const showedList = data.map(
    ({
      id,
      thumbnailUrl,
      title,
      location,
      price,
      originalPrice,
      currentRecruitment,
      finalRecruitment,
      createdDateTime,
      closedDateTime,
      writerId,
    }) => (
      <S.ItemWrapper
        key={id}
        onClick={() => {
          handleClickShareList({ id, writerId });
        }}
        isSingle={isSingle}
      >
        <S.ImgWrapper>
          <ImgContainer
            imgSrc={thumbnailUrl}
            imgTitle={title}
            imgWrapperWidth='100%'
            imgWrapperRatio={2.13 / 1}
          />
          <ImageContents
            dateTime={closedDateTime}
            isDone={isDone}
            isWish={isWish}
            wishListClickHandler={clickHeartHandler}
            id={id}
            isEmptyHeart={heartIdArr.includes(id)}
          />
        </S.ImgWrapper>
        <S.Container>
          <S.TextWrapper>
            <S.Title>{title}</S.Title>
            <S.Location>
              {location} / {calcTwoTimeDifference(createdDateTime)}
            </S.Location>
            <S.PriceWrapper>
              <S.Price>{getPriceType({ price, isUnit: true })}</S.Price>
              <S.OriginPrice>{getPriceType({ price: originalPrice, isUnit: true })}</S.OriginPrice>
            </S.PriceWrapper>
          </S.TextWrapper>
          <S.PersonnelStatusWrapper>
            <PersonnelStatus curPersonnel={currentRecruitment} totalPersonnel={finalRecruitment} />
          </S.PersonnelStatusWrapper>
        </S.Container>
      </S.ItemWrapper>
    ),
  );

  if (showedList.length % 2)
    showedList.push(<S.ItemWrapper key={createRandomKey()} isEmpty={true} />);

  return <S.ListWrapper>{showedList}</S.ListWrapper>;
};

export default PreviewShareListBigSizeImage;
