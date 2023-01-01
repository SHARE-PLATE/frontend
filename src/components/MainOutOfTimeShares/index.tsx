import { useRecoilValueLoadable } from 'recoil';

import Loading from '@components/Loading';
import * as S from '@components/MainOutOfTimeShares/MainOutOfTimeShares.style';
import PreviewShareListLongImage from '@components/PreviewShareListLongImage';
import Title from '@components/common/Title';
import {
  ERROR_GET_SHARE_INFO,
  littleDeadlineMention,
  noLittleTimeListMention,
} from '@constants/mentions';
import { recommandedDataState } from '@store/shareDetail';

const MainOutOfTimeShares = () => {
  const { state, contents } = useRecoilValueLoadable(recommandedDataState);

  const getShares = () => {
    switch (state) {
      case 'loading':
        return <Loading border={5} size={40} color='grey4' height='10rem' />;
      case 'hasError':
        return <S.ErrorWrapper>{ERROR_GET_SHARE_INFO}</S.ErrorWrapper>;
      case 'hasValue':
        const { isSuccess, data } = contents;
        if (isSuccess && data) {
          return <PreviewShareListLongImage noListMention={noLittleTimeListMention} data={data} />;
        } else {
          return <S.ErrorWrapper>{ERROR_GET_SHARE_INFO}</S.ErrorWrapper>;
        }
    }
  };

  return (
    <S.Wrapper>
      <Title
        contentTitle={littleDeadlineMention}
        size='LARGE'
        iconName='ClockPicture'
        iconSize={1.43}
      />
      {getShares()}
    </S.Wrapper>
  );
};

export default MainOutOfTimeShares;
