import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { getShareListData } from '@api/shareList';
import LoginArea from '@components/LoginArea';
import * as S from '@components/MainContents/MainContents.style';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import Title from '@components/common/Title';
import { shareDeliveryMention, shareIngredientMention } from '@constants/mentions';
import { currentLatitudeLongitude } from '@store/location';
import { thumbnailUrlListType } from '@type/shareList';
import { getDeadlineSort } from '@utils/ShareListSort';

const mainPageShareListCount = 4;
const isLogin = false;

const MainContents = () => {
  const [deliveryData, setDeliveryData] = useState<thumbnailUrlListType[]>();
  const [ingredient, setIngredientData] = useState<thumbnailUrlListType[]>();
  const location = useRecoilValue(currentLatitudeLongitude);

  useEffect(() => {
    (async () => {
      const deliveryFetchData = await getShareListData(
        { delivery: true, ingredient: false },
        location,
      );

      setDeliveryData(deliveryFetchData);
    })();

    (async () => {
      const ingredientFetchData = await getShareListData(
        { delivery: false, ingredient: true },
        location,
      );
      setIngredientData(ingredientFetchData);
    })();
  }, [location]);

  return (
    <S.Wrapper>
      <Title contentTitle={shareDeliveryMention} handleClick={() => true} size='LARGE' />
      <S.PreviewWrapper>
        {deliveryData && (
          <PreviewShareListLeftImage
            data={getDeadlineSort(deliveryData)}
            count={mainPageShareListCount}
          />
        )}
      </S.PreviewWrapper>
      <Title contentTitle={shareIngredientMention} handleClick={() => true} size='LARGE' />
      <S.PreviewWrapper>
        {ingredient && (
          <PreviewShareListLeftImage
            data={getDeadlineSort(ingredient)}
            count={mainPageShareListCount}
          />
        )}
      </S.PreviewWrapper>
      {!isLogin && <LoginArea />}
    </S.Wrapper>
  );
};

export default MainContents;
