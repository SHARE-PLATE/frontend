import { ReactElement, useEffect, useState } from 'react';

import { v4 as createRandomKey } from 'uuid';

import * as S from '@components/PreviewShareListHalfImage/PreviewShareListHalfImage.style';
import ShareListItemHalfImage from '@components/ShareListItemHalfImage';
import Title from '@components/common/Title';
import { thumbnailUrlListType } from '@type/shareList';

type PreviewShareListHalfImagePropsType = {
  title: string;
  emptyMention: string;
  data: thumbnailUrlListType[];
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
      itemListArray.push(<ShareListItemHalfImage key={createRandomKey()} />);

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
      <Title contentTitle={title} handleClick={() => showMoreOption && showMoreOption()} />
      {showedList}
    </S.Wrapper>
  );
};

export default PreviewShareListHalfImage;
