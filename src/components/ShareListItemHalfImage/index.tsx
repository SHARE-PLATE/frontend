import * as S from '@components/ShareListItemHalfImage/ShareListItemHalfImage.style';
import ImgContainer from '@components/common/ImgContainer';
import { ShareListType } from '@type/shareList';
import { getPriceType } from '@utils/getPriceType';

type ShareListItemHalfImagePropsType = {
  itemInfo?: ShareListType;
};

const ShareListItemHalfImage = ({ itemInfo }: ShareListItemHalfImagePropsType) => {
  if (!itemInfo) return <S.Wrapper />;

  const { thumbnailUrl, title, price } = itemInfo;

  return (
    <S.Wrapper>
      <ImgContainer
        imgSrc={thumbnailUrl}
        imgTitle={title}
        imgWrapperWidth='100%'
        imgWrapperRatio={1.8 / 1}
        borderRadius='0.5rem'
      />
      <S.InfoWrapper>
        <div>{title}</div>
        <div>{getPriceType({ price, isUnit: true })}</div>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default ShareListItemHalfImage;
