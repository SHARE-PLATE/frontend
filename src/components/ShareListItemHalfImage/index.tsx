import * as S from '@components/ShareListItemHalfImage/ShareListItemHalfImage.style';
import { listExampleType } from '@data/shareList';
import { getPriceType } from '@utils/getPriceType';

type ShareListItemHalfImagePropsType = {
  itemInfo?: listExampleType;
};

const ShareListItemHalfImage = ({ itemInfo }: ShareListItemHalfImagePropsType) => {
  if (!itemInfo) return <S.Wrapper />;

  const { thumbnailUrl, title, price } = itemInfo;

  return (
    <S.Wrapper>
      <S.ImgWrapper>
        <img src={thumbnailUrl} />
      </S.ImgWrapper>
      <S.InfoWrapper>
        <div>{title}</div>
        <div>{getPriceType({ price, isUnit: true })}</div>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default ShareListItemHalfImage;