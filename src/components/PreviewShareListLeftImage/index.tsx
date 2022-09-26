import React, { ReactElement, useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import { v4 as getRandomKey } from 'uuid';

import { deleteWishListContent } from '@api/myMenu';
import * as S from '@components/PreviewShareListLeftImage/PreviewShareListLeftImage.style';
import WishHeart from '@components/WishHeart';
import ImageContents from '@components/common/ImageContents';
import ImgContainer from '@components/common/ImgContainer';
import PersonnelStatus from '@components/common/PersonnelStatus';
import Price from '@components/common/Price';
import SelectModal from '@components/common/SelectModal';
import { deleteYesMention, wishListDeleteMention } from '@constants/mentions';
import useModal from '@hooks/useModal';
import { thumbnailUrlListType } from '@type/shareList';
import { calcTwoTimeDifference } from '@utils/getTimeDiff';

interface PreviewShareListLeftImagePropsType {
  data: thumbnailUrlListType[];
  count?: number;
  isDone?: boolean;
  isWish?: boolean;
}
const PreviewShareListLeftImage = ({
  data,
  count,
  isDone,
  isWish,
}: PreviewShareListLeftImagePropsType) => {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);
  const [isDeleteModal, setIsDeleteModal] = useModal({ modalRef });

  const list: ReactElement[] = [];

  const closeModal = () => setIsDeleteModal(false);
  const openModal = () => setIsDeleteModal(true);

  const deleteHandler = async (parameter: number) => {
    if (!parameter) return;

    const isSuccessFetch = await deleteWishListContent(parameter);
    if (isSuccessFetch) {
      closeModal();
    }
  };

  const handelClickShareList = ({ target: { tagName } }: any, id: number) => {
    if (tagName === 'svg' || tagName === 'path') return;
    navigate(`/share-detail/${id}`);
  };

  data.every(
    (
      {
        id,
        thumbnailUrl,
        title,
        location,
        price,
        originalPrice,
        currentRecruitment,
        finalRecruitment,
        createdDateTime,
        appointmentDateTime,
      },
      dataCount,
    ) => {
      list.push(
        <React.Fragment key={id}>
          <S.Container
            onClick={(e) => {
              handelClickShareList(e, id);
            }}
          >
            <S.ImgWrapper>
              <ImgContainer
                imgSrc={thumbnailUrl}
                imgTitle={title}
                imgWrapperWidth='7rem'
                imgWrapperRatio={1 / 1}
              />
              <ImageContents dateTime={appointmentDateTime} isDone={isDone} />
            </S.ImgWrapper>
            <S.ListInfo>
              <S.ListInfoTexts>
                <S.Title>{title}</S.Title>
                <S.Location>
                  {location} / {calcTwoTimeDifference(createdDateTime)}
                </S.Location>
                <Price price={price} originalPrice={originalPrice} />
                {isWish && <WishHeart type='ingredient' clickHandler={openModal} />}
              </S.ListInfoTexts>
              <PersonnelStatus
                curPersonnel={currentRecruitment}
                totalPersonnel={finalRecruitment}
              />
            </S.ListInfo>
          </S.Container>
          {isDeleteModal && (
            <SelectModal
              modalRef={modalRef}
              closeAModal={closeModal}
              deleteHandler={deleteHandler}
              clickHandlerParams={id}
              title={wishListDeleteMention}
              okMention={deleteYesMention}
            />
          )}
        </React.Fragment>,
      );

      return dataCount + 1 === count ? false : true;
    },
  );

  if (list.length % 2) list.push(<S.Container key={getRandomKey()}></S.Container>);

  return <S.Wrapper>{list}</S.Wrapper>;
};

export default PreviewShareListLeftImage;
