import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { getShareListData } from '@api/shareList';
import LoginArea from '@components/LoginArea';
import * as S from '@components/MainContents/MainContents.style';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import Title from '@components/common/Title';
import { shareDeliveryMention, shareIngredientMention } from '@constants/mentions';
import { currentLatitudeLongitude } from '@store/location';
import { ShareListType } from '@type/shareList';
import { getDeadlineSort } from '@utils/ShareListSort';

const mainPageShareListCount = 4;

const MainContents = () => {
  const [deliveryData, setDeliveryData] = useState<ShareListType[]>();
  const [ingredientData, setIngredientData] = useState<ShareListType[]>();
  const location = useRecoilValue(currentLatitudeLongitude);

  const getData = async () => {
    const deliveryFetchData = await getShareListData({ type: 'delivery', location });
    const ingredientFetchData = await getShareListData({ type: 'ingredient', location });

    setDeliveryData(deliveryFetchData);
    setIngredientData(ingredientFetchData);
  };

  useEffect(() => {
    getData();
  }, [location]);

  return (
    <S.Wrapper>
      <Title
        contentTitle={shareDeliveryMention}
        handleClick={() => true}
        size='LARGE'
        iconName='PizzaPicture'
        iconSize={1.43}
      />
      <S.PreviewWrapper>
        {deliveryData && (
          <PreviewShareListLeftImage
            data={getDeadlineSort(deliveryData)}
            count={mainPageShareListCount}
          />
        )}
      </S.PreviewWrapper>
      <Title
        contentTitle={shareIngredientMention}
        handleClick={() => true}
        size='LARGE'
        iconName='MeatPicture'
        iconSize={1.43}
      />
      <S.PreviewWrapper>
        {ingredientData && (
          <PreviewShareListLeftImage
            data={getDeadlineSort(ingredientData)}
            count={mainPageShareListCount}
          />
        )}
      </S.PreviewWrapper>
      <LoginArea />
    </S.Wrapper>
  );
};

export default MainContents;
