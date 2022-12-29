import { useRecoilValueLoadable } from 'recoil';

import Loading from '@components/Loading';
import PreviewShareListHalfImage from '@components/PreviewShareListHalfImage';
import * as S from '@components/ShareDetailRecommanded/ShareDetailRecommanded.style';
import { noRelatedShareList, offerShare } from '@constants/mentions';
import { recommandedDataState } from '@store/shareDetail';

const ERROR_GET_RECOMMANDED_SHARES = '추천 쉐어를 가져오지 못했습니다.';

const ShareDetailRecommanded = () => {
  const { state, contents } = useRecoilValueLoadable(recommandedDataState);

  switch (state) {
    case 'loading':
      return <Loading color='grey4' size={30} border={3} />;
    case 'hasError':
      return <S.ErrorWrapper>{ERROR_GET_RECOMMANDED_SHARES}</S.ErrorWrapper>;
    case 'hasValue':
      const { isSuccess, data } = contents;

      if (isSuccess && data) {
        return (
          <PreviewShareListHalfImage
            title={offerShare}
            data={data}
            emptyMention={noRelatedShareList}
          />
        );
      } else {
        return <S.ErrorWrapper>{ERROR_GET_RECOMMANDED_SHARES}</S.ErrorWrapper>;
      }
  }
};

export default ShareDetailRecommanded;
