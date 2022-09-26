import React, { ReactElement, useRef, MouseEvent } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import { deletePurchaseList, deleteMySalesList } from '@api/myMenu';
import KebabMenu from '@components/KebabMenu';
import KebabMenuModal from '@components/KebabMenuModal';
import * as S from '@components/PreviewShareListLeftImage/PreviewShareListLeftImage.style';
import WishHeart from '@components/WishHeart';
import ImageContents from '@components/common/ImageContents';
import ImgContainer from '@components/common/ImgContainer';
import PersonnelStatus from '@components/common/PersonnelStatus';
import Price from '@components/common/Price';
import SelectModal from '@components/common/SelectModal';
import { deleteYesMention, historyDeleteMention } from '@constants/mentions';
import { pathName } from '@constants/pathName';
import useModal from '@hooks/useModal';
import { clickedHeartId, historyTrigger } from '@store/meyMenu';
import { CloseModal, OpenModal } from '@type/modalFunction';
import { thumbnailUrlListType } from '@type/shareList';
import { calcTwoTimeDifference } from '@utils/getTimeDiff';

interface PreviewShareListLeftImagePropsType {
  data: thumbnailUrlListType[];
  count?: number;
  currentMyMenuType?: string;
  isHistory?: boolean;
  isDone?: boolean;
  isWish?: boolean;
}
const PreviewShareListLeftImage = ({
  data,
  count,
  currentMyMenuType,
  isHistory,
  isDone,
  isWish,
}: PreviewShareListLeftImagePropsType) => {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);
  const setHistoryTrigger = useSetRecoilState(historyTrigger);

  const [isKebabMenuModal, setKebabMenuModal] = useModal({ modalRef });
  const [isDeleteModal, setIsDeleteModal] = useModal({ modalRef });
  const [heartIdArr, setHeartIdArr] = useRecoilState<number[]>(clickedHeartId);

  const list: ReactElement[] = [];

  const closeModal: CloseModal = ({ isDeleteModal }) => {
    isDeleteModal ? setIsDeleteModal(false) : setKebabMenuModal(false);
  };
  const openModal: OpenModal = (e, { isDeleteModal }) => {
    e.stopPropagation();
    isDeleteModal ? setIsDeleteModal(true) : setKebabMenuModal(true);
  };

  const clickHeartHandler = (e: MouseEvent, id: number) => {
    e.stopPropagation();
    if (!heartIdArr.length) return setHeartIdArr([id]);
    if (!heartIdArr.includes(id)) return setHeartIdArr([...heartIdArr, id]);

    const filterArr = heartIdArr.filter((el: number) => el !== id);
    return setHeartIdArr(filterArr);
  };

  const deleteHandler = async (parameter: number) => {
    if (!parameter) return;

    let isSuccessFetch;
    if (currentMyMenuType === 'sales') isSuccessFetch = await deleteMySalesList(parameter);
    if (currentMyMenuType === 'purchase') isSuccessFetch = await deletePurchaseList(parameter);

    if (isSuccessFetch) {
      setHistoryTrigger((prev) => prev + 1);
      closeModal({ isDeleteModal: true });
    }
  };

  const handelClickShareList = (id: number) => {
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
            onClick={() => {
              handelClickShareList(id);
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
              </S.ListInfoTexts>
              <PersonnelStatus
                curPersonnel={currentRecruitment}
                totalPersonnel={finalRecruitment}
              />
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
              {isHistory && <KebabMenu clickHandler={openModal} />}
            </S.IconContainer>
          </S.Container>
          {isKebabMenuModal && (
            <KebabMenuModal modalRef={modalRef} closeModal={closeModal} openModal={openModal} />
          )}
          {isDeleteModal && (
            <SelectModal
              modalRef={modalRef}
              closeParameterModal={closeModal}
              deleteHandler={deleteHandler}
              clickHandlerParams={id}
              title={historyDeleteMention}
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
