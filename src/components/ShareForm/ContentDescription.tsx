import * as S from '@components/ShareForm/ShareForm.style';
import { UseInputReturnType } from '@hooks/useInput';

interface ContentDescriptionPropsType {
  descriptionInput: UseInputReturnType;
}

const ContentDescription = ({ descriptionInput }: ContentDescriptionPropsType) => {
  return (
    <S.DescriptionWrapper>
      <S.ContentDescriptionInput placeholder='내용을 입력해주세요' />
    </S.DescriptionWrapper>
  );
};

export default ContentDescription;
