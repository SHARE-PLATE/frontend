import { useEffect, useRef, useState, MouseEvent } from 'react';

import { useRecoilValue, useRecoilState } from 'recoil';

import { deleteMySalesList, deletePurchaseList, getProfileMyMenuData } from '@api/myMenu';
import CategoryButton from '@components/CategoryButton';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import Tabs from '@components/Tabs';
import KebabMenuModal from '@components/ToastModal';
import ToastModal from '@components/ToastModal';
import BackTitleHeader from '@components/common/BackTitleHeader';
import SelectModal from '@components/common/SelectModal';
import { historyListCategoryItem } from '@constants/category';
import { historyDeleteMention } from '@constants/mentions';
import { DELETE } from '@constants/words';
import { historyListItem } from '@data/myMenu';
import useModal from '@hooks/useModal';
import useShareListTabsInfo from '@hooks/useShareListTabsInfo';
import * as S from '@pages/History/History.style';
import { activeShareList } from '@store/filterShareList';
import { activeShareListType } from '@store/filterShareList';
import { historyTrigger } from '@store/meyMenu';
import { CloseModal, OpenModal } from '@type/modalFunction';
import { ShareListType } from '@type/shareList';
import { getRecencySort } from '@utils/ShareListSort';
import { getHistoryMention } from '@utils/getMention';

const History = ({ menuType }: { menuType: string }) => {
  const [salesData, setSalesData] = useState<ShareListType[]>();
  const [deletedId, setDeletedId] = useState<number>();

  const shareListTabsInfo = useShareListTabsInfo();
  const [historyListTrigger, setHistoryTrigger] = useRecoilState(historyTrigger);

  const [isDone, setIsDone] = useState<boolean>(false);
  const currentShareType = useRecoilValue(activeShareList);
  const currentMyMenuType = historyListItem.filter((item) => item.type === menuType)[0];
  const currentCategoryContent = historyListCategoryItem.filter((item) => item.type === menuType);

  const modalRef = useRef<HTMLDivElement>(null);

  const [isKebabMenuModal, setKebabMenuModal] = useModal({ modalRef });
  const [isDeleteModal, setIsDeleteModal] = useModal({ modalRef });

  const closeModal: CloseModal = ({ isDeleteModal }) => {
    isDeleteModal ? setIsDeleteModal(false) : setKebabMenuModal(false);
  };

  const onClickKebabMenu = (e: MouseEvent<HTMLDivElement>, id: number) => {
    e.stopPropagation();
    setDeletedId(id);
    setKebabMenuModal(true);
  };

  const deleteHandler = async () => {
    if (!deletedId) return;

    let isSuccessFetch;
    if (currentMyMenuType.type === 'sales') isSuccessFetch = await deleteMySalesList(deletedId);
    if (currentMyMenuType.type === 'purchase') isSuccessFetch = await deletePurchaseList(deletedId);

    if (isSuccessFetch) {
      setHistoryTrigger((prev) => prev + 1);
      setIsDeleteModal(false);
    }
  };

  useEffect(() => {
    (async () => {
      const response = await getProfileMyMenuData(
        currentMyMenuType.mineType,
        currentShareType,
        isDone,
      );
      setSalesData(response);
    })();
    return () => setSalesData([]);
  }, [currentMyMenuType, currentShareType, isDone, historyListTrigger]);

  return (
    <S.Wrapper>
      <BackTitleHeader title={currentMyMenuType.title} />
      <Tabs<activeShareListType> tabsInfo={shareListTabsInfo} targetAtom={activeShareList} />
      <CategoryButton categoryItem={currentCategoryContent} setCurrentFilterList={setIsDone} />
      {!!salesData?.length ? (
        <S.ListContent>
          <PreviewShareListLeftImage
            data={getRecencySort(salesData)}
            isDone={isDone}
            onClickKebabMenu={onClickKebabMenu}
          />
        </S.ListContent>
      ) : (
        <S.FailedContent>
          <S.FailedText>{getHistoryMention(menuType, isDone)}</S.FailedText>
        </S.FailedContent>
      )}
      {isKebabMenuModal && (
        <ToastModal
          modalRef={modalRef}
          closeToastModal={() => setKebabMenuModal(false)}
          mainButtonTitle={DELETE}
          mainButtonHandler={() => {
            setKebabMenuModal(false);
            setIsDeleteModal(true);
          }}
        />
      )}
      {isDeleteModal && (
        <SelectModal
          modalRef={modalRef}
          closeParameterModal={closeModal}
          onClickOkButton={deleteHandler}
          answeringMention={historyDeleteMention}
          okMention={DELETE}
        />
      )}
    </S.Wrapper>
  );
};

export default History;
