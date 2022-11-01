import { useEffect, useState, MouseEvent } from 'react';

import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';

import { deleteMySalesList, deletePurchaseList, getProfileMyMenuData } from '@api/myMenu';
import CategoryButton from '@components/CategoryButton';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import Tabs from '@components/Tabs';
import BackTitleHeader from '@components/common/BackTitleHeader';
import { historyListCategoryItem } from '@constants/category';
import { historyDeleteMention } from '@constants/mentions';
import { DELETE } from '@constants/words';
import { historyListItem } from '@data/myMenu';
import useShareListTabsInfo from '@hooks/useShareListTabsInfo';
import * as S from '@pages/History/History.style';
import { activeShareList } from '@store/filterShareList';
import { activeShareListType } from '@store/filterShareList';
import { historyTrigger } from '@store/meyMenu';
import { selectModalInfoState, toastModalInfoState } from '@store/modal';
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
  const setSelectModalInfo = useSetRecoilState(selectModalInfoState);
  const setToastModalInfo = useSetRecoilState(toastModalInfoState);

  const openSelectModal = () => {
    setSelectModalInfo(({ trigger }) => ({
      trigger: trigger + 1,
      onClickOkButton: onClickDeleteButton,
      answeringMention: historyDeleteMention,
      okMention: DELETE,
    }));
  };

  const onClickKebabMenu = (event: MouseEvent<HTMLDivElement>, id: number) => {
    event.stopPropagation();
    setDeletedId(id);
    setToastModalInfo(({ trigger }) => ({
      trigger: trigger + 1,
      mainButtonTitle: DELETE,
      mainButtonHandler: openSelectModal,
    }));
  };

  const onClickDeleteButton = async () => {
    if (!deletedId) return;

    let isSuccessFetch;
    if (currentMyMenuType.type === 'sales') isSuccessFetch = await deleteMySalesList(deletedId);
    if (currentMyMenuType.type === 'purchase') isSuccessFetch = await deletePurchaseList(deletedId);
    if (isSuccessFetch) setHistoryTrigger((prev) => prev + 1);
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
      <BackTitleHeader title={currentMyMenuType.title} backIconTargetPathname='profile' />
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
    </S.Wrapper>
  );
};

export default History;
