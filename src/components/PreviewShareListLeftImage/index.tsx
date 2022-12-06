import { MouseEvent } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import * as S from '@components/PreviewShareListLeftImage/PreviewShareListLeftImage.style';
import WishHeart from '@components/WishHeart';
import Icon from '@components/common/Icon';
import ImageContents from '@components/common/ImageContents';
import ImgContainer from '@components/common/ImgContainer';
import PersonnelStatus from '@components/common/PersonnelStatus';
import Price from '@components/common/Price';
import { noRelatedShareList } from '@constants/mentions';
import { pathName } from '@constants/pathName';
import { clickedHeartId } from '@store/meyMenu';
import { ShareListType } from '@type/shareList';
import { calcTwoTimeDifference } from '@utils/getTimeDiff';

interface PreviewShareListLeftImagePropsType {
  data: ShareListType[];
  count?: number;
  isDone?: boolean;
  isWish?: boolean;
  isSingle?: boolean;
  onClickKebabMenu?: (event: MouseEvent<HTMLDivElement>, id: number) => void;
}
const PreviewShareListLeftImage = ({
  data,
  count,
  isDone,
  isWish,
  isSingle,
  onClickKebabMenu,
}: PreviewShareListLeftImagePropsType) => {
  const navigate = useNavigate();
  const [heartIdArr, setHeartIdArr] = useRecoilState<number[]>(clickedHeartId);
  const curData = count && data.length > count ? data.slice(0, count) : data;

  const clickHeartHandler = (event: MouseEvent, id: number) => {
    event.stopPropagation();
    if (!heartIdArr.length) return setHeartIdArr([id]);
    if (!heartIdArr.includes(id)) return setHeartIdArr([...heartIdArr, id]);

    const filterArr = heartIdArr.filter((el: number) => el !== id);
    return setHeartIdArr(filterArr);
  };

  const handelClickShareList = (id: number) => {
    navigate(`${pathName.shareDetail}/${id}`);
  };

  const list = curData.map(
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
    }) => {
      return (
        <S.Container
          key={id}
          isSingle={isSingle}
          onClick={() => {
            handelClickShareList(id);
          }}
        >
          <S.ImgWrapper>
            <ImgContainer
              imgSrc={thumbnailUrl}
              imgTitle={title}
              imgWrapperWidth='6.6rem'
              imgWrapperRatio={1 / 1}
            />
            <ImageContents dateTime={closedDateTime} isDone={isDone} />
          </S.ImgWrapper>
          <S.ListInfo>
            <S.ListInfoTexts>
              <S.Title>{title}</S.Title>
              <S.Location>
                {location} / {calcTwoTimeDifference(createdDateTime)}
              </S.Location>
              <Price price={price} originalPrice={originalPrice} />
            </S.ListInfoTexts>
            <PersonnelStatus curPersonnel={currentRecruitment} totalPersonnel={finalRecruitment} />
          </S.ListInfo>
          <S.IconContainer>
            {isWish && (
              <WishHeart
                type='ingredient'
                id={id}
                isEmptyHeart={heartIdArr.includes(id)}
                clickHandler={clickHeartHandler}
              />
            )}
            {onClickKebabMenu && (
              <S.KebabMenuWrapper onClick={(event) => onClickKebabMenu(event, id)}>
                <Icon iconName='KebabMenu' />
              </S.KebabMenuWrapper>
            )}
          </S.IconContainer>
        </S.Container>
      );
    },
  );

  if (count && list.length % 2 && list.length < count)
    list.push(<S.Container key={getRandomKey()}></S.Container>);

  if (!list.length)
    list.push(<S.NoListWrapper key={getRandomKey()}>{noRelatedShareList}</S.NoListWrapper>);

  return <S.Wrapper>{list}</S.Wrapper>;
};

export default PreviewShareListLeftImage;
