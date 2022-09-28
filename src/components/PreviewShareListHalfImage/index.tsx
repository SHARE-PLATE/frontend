import { v4 as createRandomKey } from 'uuid';

import * as S from '@components/PreviewShareListHalfImage/PreviewShareListHalfImage.style';
import ShareListItemHalfImage from '@components/ShareListItemHalfImage';
import Title from '@components/common/Title';
import { ShareRecommendationType } from '@type/shareList';

type PreviewShareListHalfImagePropsType = {
  title: string;
  emptyMention: string;
  data: ShareRecommendationType[];
  showMoreOption?: () => void;
};

const PreviewShareListHalfImage = ({
  title,
  data,
  emptyMention,
  showMoreOption,
}: PreviewShareListHalfImagePropsType) => {
  const showList = () => {
    if (!data.length) return <S.noListWrapper>{emptyMention}</S.noListWrapper>;

    const itemListArray = data.map((item) => (
      <ShareListItemHalfImage key={item.id} itemInfo={item} />
    ));
    if (itemListArray.length % 2)
      itemListArray.push(<ShareListItemHalfImage key={createRandomKey()} />);

    return <S.ListWrapper>{itemListArray}</S.ListWrapper>;
  };

  const list = showList();

  return (
    <S.Wrapper>
      <Title contentTitle={title} handleClick={() => showMoreOption && showMoreOption()} />
      {list}
    </S.Wrapper>
  );
};

export default PreviewShareListHalfImage;
