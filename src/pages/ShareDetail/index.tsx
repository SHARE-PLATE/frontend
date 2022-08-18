import { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

import PreviewShareListHalfImage from '@components/PreviewShareListHalfImage';
import ShareDetailHeader from '@components/ShareDetailHeader';
import ShareDetailInfo from '@components/ShareDetailInfo';
import UserInfoWithFollow from '@components/UserInfoWithFollow';
import { API } from '@constants/api';
import { noRelatedShareList, offerShare } from '@constants/mentions';
import { detailExample } from '@data/detail';
import { listExample } from '@data/shareList';
import * as S from '@pages/ShareDetail/ShareDetail.style';

const user = 'JinJeon';

const ShareDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(detailExample);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${API.SHARE_DETAIL(id)}`);

      setData(data);
    })();
  }, [id]);

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
