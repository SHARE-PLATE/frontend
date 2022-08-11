import { useState } from 'react';

import styled from 'styled-components';

import ShareDetailContents from '@components/ShareDetailContents';
import ShareDetailImage from '@components/ShareDetailImage';
import { detailExample } from '@data/detail';

const ShareDetail = () => {
  const [data, setData] = useState(detailExample);

  return (
    <Wrapper>
      {data && (
        <Container>
          <ShareDetailContents data={data} />
          <ShareDetailImage data={data} />
        </Container>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default ShareDetail;
