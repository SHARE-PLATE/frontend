import * as S from '@components/PreviewShareListLongImage/PreviewShareListLongImage.style';
import { ShareListItemLongImage } from '@components/ShareListItemLongImage';
import { littleDeadlineMention } from '@constants/mentions';
import { listExample } from '@data/shareList';
import { getDeadlineSort } from '@utils/ShareListSort';

const PreviewShareListLongImage = () => {
  const data = getDeadlineSort(listExample);
  const list = data.map((item) => <ShareListItemLongImage itemInfo={item} />);

  return (
    <S.Wrapper>
      <S.MentionWrapper>{littleDeadlineMention}</S.MentionWrapper>
      <S.ListWrapper>{list}</S.ListWrapper>
    </S.Wrapper>
  );
};

export default PreviewShareListLongImage;
