import { useRecoilValueLoadable } from 'recoil';

import Loading from '@components/Loading';
import PreviewShareListHalfImage from '@components/PreviewShareListHalfImage';
import * as S from '@components/UserInfoWithFollow/UserInfoWithFollow.style';
import ImgContainer from '@components/common/ImgContainer';
import { ERROR_GET_WRITER_INFO, noRelatedShareList } from '@constants/mentions';
import { TOTAL_SHARES } from '@constants/words';
import { writerDataState } from '@store/shareDetail';

const UserInfoWithFollow = ({ id }: { id: string }) => {
  const { contents, state } = useRecoilValueLoadable(writerDataState({ id }));

  switch (state) {
    case 'hasError':
      return <S.ErrorWrapper>{ERROR_GET_WRITER_INFO}</S.ErrorWrapper>;
    case 'loading':
      return (
        <S.ErrorWrapper>
          <Loading color='grey4' size={30} border={3} />
        </S.ErrorWrapper>
      );
    case 'hasValue':
      if (!contents) return <S.ErrorWrapper>{ERROR_GET_WRITER_INFO}</S.ErrorWrapper>;
      const { writer, thumbnailUrl, shareCount, shares } = contents;

      return (
        <>
          <S.Wrapper>
            <S.LeftWrapper>
              <ImgContainer
                imgSrc={thumbnailUrl}
                imgTitle={thumbnailUrl}
                imgWrapperRatio={1 / 1}
                imgWrapperWidth='3rem'
                borderRadius='6rem'
              />
              <S.InfoWrapper>
                <div>{writer}</div>
                <S.InfoDetailWrapper>
                  <span>
                    {TOTAL_SHARES}
                    <span className='number'>{shareCount}</span>
                  </span>
                </S.InfoDetailWrapper>
              </S.InfoWrapper>
            </S.LeftWrapper>
          </S.Wrapper>
          <PreviewShareListHalfImage
            title={`${writer}님의 쉐어상품`}
            data={shares}
            emptyMention={noRelatedShareList}
          />
        </>
      );
  }
};

export default UserInfoWithFollow;
