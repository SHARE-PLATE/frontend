import { useNavigate } from 'react-router-dom';

import { RemainedTime } from '@components/RemainedTime';
import * as S from '@components/ShareDetailHeader/ShareDetailHeader.style';
import Icon from '@components/common/Icon';

const ShareDetailHeader = ({ imageUrls, title, appointmentDateTime }: any) => {
  // data 타입 정해지면 any 바뀔예정
  const navigate = useNavigate();
  const handleClickGoBack = () => navigate(-1);

  return (
    <S.Wrapper>
      <S.IconsWrapper>
        <Icon iconName='Back' handleClick={handleClickGoBack} />
        <Icon iconName='Upload' />
      </S.IconsWrapper>
      <S.ImageContainer>
        <img src={imageUrls[0]} alt={title} />
        <RemainedTime
          targetTime={appointmentDateTime}
          position={{
            left: '1rem',
            bottom: '1rem',
          }}
        />
      </S.ImageContainer>
    </S.Wrapper>
  );
};

export default ShareDetailHeader;
