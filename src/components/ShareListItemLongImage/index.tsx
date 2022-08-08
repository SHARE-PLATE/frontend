import { RemainedTime } from '@components/RemainedTime';
import * as S from '@components/ShareListItemLongImage/ShareListItemLongImage.style';
import { listExampleType } from '@data/shareList';
import { getPriceType } from '@utils/getPriceType';

export const ShareListItemLongImage = ({ itemInfo }: { itemInfo: listExampleType }) => {
  const { title, location, price, originalPrice, thumbnailUrl, appointmentDateTime } = itemInfo;

  return (
    <S.ItemWrapper>
      <RemainedTime targetTime={appointmentDateTime} />
      <S.ImgWrapper>
        <S.StyledImg src={thumbnailUrl} alt={title} />
      </S.ImgWrapper>
      <S.InfoWrapper>
        <S.ItemTitle>{title}</S.ItemTitle>
        <S.ItemLocation>{`${location} ∙ 몇 시간 전`}</S.ItemLocation>
        <S.ItemPrice>
          <div>{getPriceType({ price, isUnit: true })}</div>
          <div>{getPriceType({ price: originalPrice, isUnit: true })}</div>
        </S.ItemPrice>
      </S.InfoWrapper>
    </S.ItemWrapper>
  );
};
