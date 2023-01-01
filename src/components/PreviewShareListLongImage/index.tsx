import * as S from '@components/PreviewShareListLongImage/PreviewShareListLongImage.style';
import { ShareListItemLongImage } from '@components/ShareListItemLongImage';
import { ShareRecommendationType } from '@type/shareList';

type PreviewShareListLongImagePropsType = {
  data: ShareRecommendationType[];
  noListMention: string;
};

const PreviewShareListLongImage = ({ data, noListMention }: PreviewShareListLongImagePropsType) => {
  const list = data.map((item) => <ShareListItemLongImage key={item.id} itemInfo={item} />);
  const isList = !!data?.length;

  return (
    <S.Wrapper>
      {isList ? (
        <S.ListWrapper>{list}</S.ListWrapper>
      ) : (
        <S.ErrorWrapper>{noListMention}</S.ErrorWrapper>
      )}
    </S.Wrapper>
  );
};

export default PreviewShareListLongImage;
