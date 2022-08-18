import * as S from '@components/ShareForm/ShareForm.style';

interface ContentDescriptionPropsType {
  descriptionValue: string;
  setDescriptionValue: React.Dispatch<React.SetStateAction<string>>;
}

const ContentDescription = ({
  descriptionValue,
  setDescriptionValue,
}: ContentDescriptionPropsType) => {
  const handleMessageChange = ({ target }: any) => setDescriptionValue(target.value);

  return (
    <S.DescriptionWrapper>
      <S.ContentDescriptionInput
        placeholder='내용을 입력해주세요'
        value={descriptionValue}
        onChange={handleMessageChange}
      />
    </S.DescriptionWrapper>
  );
};

export default ContentDescription;
