import * as S from '@components/UserInfoWithFollow/UserInfoWithFollow.style';
import ImgContainer from '@components/common/ImgContainer';

interface UserInfoWithFollowPropsType {
  writerThumbnailImageUrl: string;
  writer: string;
}

const UserInfoWithFollow = ({ writerThumbnailImageUrl, writer }: UserInfoWithFollowPropsType) => {
  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <ImgContainer
          imgSrc={writerThumbnailImageUrl}
          imgTitle={writerThumbnailImageUrl}
          imgWrapperRatio={1 / 1}
          imgWrapperWidth='3rem'
          borderRadius='6rem'
        />
        <S.InfoWrapper>
          <div>{writer}</div>
          <S.InfoDetailWrapper>
            <span>
              전체상품 <span className='number'>10</span>
              {/* 전체상품 데이터 필요 */}
            </span>
          </S.InfoDetailWrapper>
        </S.InfoWrapper>
      </S.LeftWrapper>
      {/* <S.FollowBtn>
        <Icon iconName='Plus' />
        팔로우
      </S.FollowBtn> */}
    </S.Wrapper>
  );
};

export default UserInfoWithFollow;
