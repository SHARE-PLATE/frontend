import { useNavigate } from 'react-router-dom';

import { RemainedTime } from '@components/RemainedTime';
import * as S from '@components/ShareDetailContents/ShareDetailContents.style';
import Icon from '@components/common/Icon';
import { ICON_NAME } from '@components/common/Icon/constants';

const ShareDetailContents = ({ data: { imageUrls, title, appointmentDateTime } }: any) => {
  // data 타입 정해지면 any 바뀔예정

  const navigate = useNavigate();
  const handleClickGoBack = () => navigate(-1);

  return (
    <S.ImageContainer>
      <S.Img src={imageUrls[0]} alt={title} />
      <S.BackButton onClick={handleClickGoBack}>
        <Icon iconName={ICON_NAME.BACK} />
      </S.BackButton>
      <RemainedTime targetTime={appointmentDateTime} locationBottom={true} />
    </S.ImageContainer>
  );
};

export default ShareDetailContents;
