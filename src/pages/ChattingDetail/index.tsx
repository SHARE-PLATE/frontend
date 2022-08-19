import { useParams } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';

import ChattingDatailHeader from '@components/ChattingDetailHeader';
import ChattingDetailInfo from '@components/ChattingDetailInfo';
import * as S from '@pages/ChattingDetail/ChattingDetail.style';
import { getChattingDetailsData } from '@store/chattingDetail';

const ChattingDetail = () => {
  const { id } = useParams();
  const { state, contents } = useRecoilValueLoadable(getChattingDetailsData(`${id}`));

  return (
    <S.Wrapper>
      <ChattingDatailHeader />
      <ChattingDetailInfo />
    </S.Wrapper>
  );
};

export default ChattingDetail;
