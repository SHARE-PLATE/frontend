import { useRecoilValueLoadable } from 'recoil';

import Loading from '@components/Loading';
import PreviewShareListHalfImage from '@components/PreviewShareListHalfImage';
import * as S from '@components/ShareRecommanded/ShareRecommanded.style';
import { NO_RELATED_SHARES, OFFERED_SHARE } from '@constants/mentions';
import { recommandedDataState } from '@store/shareDetail';

const ERROR_GET_RECOMMANDED_SHARES = '추천 쉐어를 가져오지 못했습니다.';

const ShareRecommanded = () => {
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
            title={OFFERED_SHARE}
            data={data}
            emptyMention={NO_RELATED_SHARES}
          />
        );
      } else {
        return <S.ErrorWrapper>{ERROR_GET_RECOMMANDED_SHARES}</S.ErrorWrapper>;
      }
  }
};

export default ShareRecommanded;
