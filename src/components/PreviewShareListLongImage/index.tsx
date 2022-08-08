import { ReactElement, useEffect, useState } from 'react';

import * as S from '@components/PreviewShareListLongImage/PreviewShareListLongImage.style';
import { ShareListItemLongImage } from '@components/ShareListItemLongImage';
import { littleDeadlineMention, noLittleTimeListMention } from '@constants/mentions';
import { listExample } from '@data/shareList';
import { getDeadlineSort } from '@utils/ShareListSort';
import { getTimeDiffInHour } from '@utils/getTimeDiff';

const PreviewShareListLongImage = () => {
  const [showedList, setShowedList] = useState<ReactElement>();

  const setNewListWithData = () => {
    const itemData = getDeadlineSort(listExample);
    const itemListArray = itemData.map((item) => {
      const timeDiff = getTimeDiffInHour(item.appointmentDateTime);

      if (timeDiff === 'over' || timeDiff === 'done') return null;
      return <ShareListItemLongImage key={item.id} itemInfo={item} />;
    });

    const isEmpty = !itemListArray.filter((item) => item).length;
    const itemList = isEmpty ? (
      <S.noListWrapper>{noLittleTimeListMention}</S.noListWrapper>
    ) : (
      <S.ListWrapper>{itemListArray}</S.ListWrapper>
    );
    setShowedList(itemList);
  };

  useEffect(() => {
    setNewListWithData();
  }, []);

  return (
    <S.Wrapper>
      <S.MentionWrapper>{littleDeadlineMention}</S.MentionWrapper>
      {showedList}
    </S.Wrapper>
  );
};

export default PreviewShareListLongImage;
