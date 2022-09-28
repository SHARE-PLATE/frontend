import React, { useRef, MouseEvent } from 'react';

import { useNavigate } from 'react-router-dom';
import { v4 as createRandomKey } from 'uuid';

import { deleteWishListContent } from '@api/myMenu';
import * as S from '@components/PreviewShareListBigSizeImage/PreviewShareListBigSizeImage.style';
import ImageContents from '@components/common/ImageContents';
import ImgContainer from '@components/common/ImgContainer';
import PersonnelStatus from '@components/common/PersonnelStatus';
import SelectModal from '@components/common/SelectModal';
import { deleteYesMention, historyDeleteMention } from '@constants/mentions';
import { pathName } from '@constants/pathName';
import useModal from '@hooks/useModal';
import { ShareListType } from '@type/shareList';
import { getPriceType } from '@utils/getPriceType';
import { calcTwoTimeDifference } from '@utils/getTimeDiff';

interface PreviewShareListBigSizeImagePropsType {
  isHistory?: boolean;
  isDone?: boolean;
  isWish?: boolean;
  data: ShareListType[];
}

const PreviewShareListBigSizeImage = ({
  data,
  isHistory,
  isDone,
  isWish,
}: PreviewShareListBigSizeImagePropsType) => {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);
  const [isDeleteModal, setIsDeleteModal] = useModal({ modalRef });

  const closeModal = () => setIsDeleteModal(false);
  const openModal = (e: MouseEvent) => {
    e.stopPropagation();
    setIsDeleteModal(true);
  };

  const deleteHandler = async (parameter: number) => {
    if (!parameter) return;
    const isSuccessFetch = await deleteWishListContent(parameter);
    if (isSuccessFetch) {
      closeModal();
    }
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
      <React.Fragment key={id}>
        <S.ItemWrapper
          onClick={() => {
            handleClickShareList({ id, writerId });
          }}
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
              wishListClickHandler={() => {}}
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
                <S.OriginPrice>
                  {getPriceType({ price: originalPrice, isUnit: true })}
                </S.OriginPrice>
              </S.PriceWrapper>
            </S.TextWrapper>
            <S.PersonnelStatusWrapper>
              <PersonnelStatus
                curPersonnel={currentRecruitment}
                totalPersonnel={finalRecruitment}
              />
            </S.PersonnelStatusWrapper>
          </S.Container>
        </S.ItemWrapper>
        {isDeleteModal && (
          <SelectModal
            modalRef={modalRef}
            closeModal={closeModal}
            deleteHandler={deleteHandler}
            clickHandlerParams={id}
            title={historyDeleteMention}
            okMention={deleteYesMention}
          />
        )}
      </React.Fragment>
    ),
  );

  if (showedList.length % 2) showedList.push(<S.ItemWrapper key={createRandomKey()} />);

  return <S.ListWrapper>{showedList}</S.ListWrapper>;
};

export default PreviewShareListBigSizeImage;
