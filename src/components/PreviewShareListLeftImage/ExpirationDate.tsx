import * as S from '@components/PreviewShareListLeftImage/PreviewShareListLeftImage.style';
import Icon from '@components/common/Icon';

const ExpirationDate = () => {
  return (
    <S.ExpirationDateWrapper>
      <div>
        <S.Text>기간만료</S.Text>
      </div>
      <div>
        <Icon iconName='CheckCircle' iconSize='LARGE' />
      </div>
    </S.ExpirationDateWrapper>
  );
};

export default ExpirationDate;
