import * as S from '@components/KeywordBox/KeywordBox.style';
import Icon from '@components/common/Icon';

const KeywordTableHeader = ({ location }: { location: string }) => {
  return (
    <S.Header>
      <S.Title>{location}</S.Title>
      <Icon iconName='DeleteCircle' iconSize='LARGE' />
    </S.Header>
  );
};

export default KeywordTableHeader;
