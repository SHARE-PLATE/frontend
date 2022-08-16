import * as S from '@components/UserInfoWithFollow/UserInfoWithFollow.style';
import Icon from '@components/common/Icon';

const imgUrl = 'https://avatars.githubusercontent.com/u/67730358?v=4';

const UserInfoWithFollow = () => {
  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <S.ImgWrapper>
          <img src={imgUrl} />
        </S.ImgWrapper>
        <S.InfoWrapper>
          <div>안녕하세요</div>
          <S.InfoDetailWrapper>
            <span>
              전체상품 <span className='number'>10</span>
            </span>
            <span>
              팔로워 <span className='number'>9</span>
            </span>
          </S.InfoDetailWrapper>
        </S.InfoWrapper>
      </S.LeftWrapper>
      <S.FollowBtn>
        <Icon iconName='Plus' />
        팔로우
      </S.FollowBtn>
    </S.Wrapper>
  );
};

export default UserInfoWithFollow;
