import styled from 'styled-components';

import PreviewShareListCenterImage from '@components/PreviewShareListCenterImage';
import Title from '@components/common/Title';
import { sharingExample, sharingExampleType } from '@data/sharing';

const ReserveShare = () => {
  const mokData: sharingExampleType[] | undefined = sharingExample;
  const falseData = undefined;
  return (
    <Wrapper>
      <Title contentTitle='쉐어중' />
      <PreviewShareListCenterImage title='쉐어' data={mokData} />
      <Title contentTitle='예약중' />
      <PreviewShareListCenterImage title='예약' data={falseData} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ReserveShare;
