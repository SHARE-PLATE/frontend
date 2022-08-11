import { ReactElement, useEffect, useState } from 'react';

import * as S from '@components/PreviewShareListHalfImage/PreviewShareListHalfImage.style';
import ShareListItemHalfImage from '@components/ShareListItemHalfImage';
import { listExampleType } from '@data/shareList';

type PreviewShareListHalfImagePropsType = {
  title: string;
  emptyMention: string;
  data: listExampleType[];
  showMoreOption?: () => void;
};

const PreviewShareListHalfImage = ({
  title,
  data,
  emptyMention,
  showMoreOption,
}: PreviewShareListHalfImagePropsType) => {
  const [showedList, setShowedList] = useState<ReactElement>();

  const setNewListWithData = () => {
    const itemListArray = data.map((item) => (
      <ShareListItemHalfImage key={item.id} itemInfo={item} />
    ));
    if (itemListArray.length % 2)
      itemListArray.push(<ShareListItemHalfImage key={Math.random()} />);

    const itemList = !itemListArray.length ? (
      <S.noListWrapper>{emptyMention}</S.noListWrapper>
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
      <S.TitleWrapper>
        {title}
        {showMoreOption && <S.showMoreBtn onClick={() => showMoreOption()}>더보기</S.showMoreBtn>}
      </S.TitleWrapper>
      {showedList}
    </S.Wrapper>
  );
};

export default PreviewShareListHalfImage;
