import { useState } from 'react';

import PreviewShareListHalfImage from '@components/PreviewShareListHalfImage';
import ShareDetailHeader from '@components/ShareDetailHeader';
import ShareDetailInfo from '@components/ShareDetailInfo';
import UserInfoWithFollow from '@components/UserInfoWithFollow';
import { noRelatedShareList, offerShare } from '@constants/mentions';
import { detailExample } from '@data/detail';
import { listExample } from '@data/shareList';
import * as S from '@pages/ShareDetail/ShareDetail.style';

const user = 'JinJeon';

const ShareDetail = () => {
  const [data, setData] = useState(detailExample);

  return (
    <S.Wrapper>
      {data && (
        <>
          <S.UpperWrapper>
            <ShareDetailHeader {...data} />
            <ShareDetailInfo {...data} />
          </S.UpperWrapper>
          <div>
            <UserInfoWithFollow />
            <PreviewShareListHalfImage
              title={`${user}님의 쉐어상품`}
              data={[]}
              emptyMention={noRelatedShareList}
              showMoreOption={() => console.log('더보기')}
            />
            <PreviewShareListHalfImage
              title={offerShare}
              data={listExample}
              emptyMention={noRelatedShareList}
            />
          </div>
        </>
      )}
    </S.Wrapper>
  );
};

export default ShareDetail;
