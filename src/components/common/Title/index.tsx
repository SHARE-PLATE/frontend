import styled from 'styled-components';

interface TitlePropsType {
  contentTitle: string;
  isContent?: boolean;
}

const Title = ({ contentTitle, isContent = false }: TitlePropsType) => {
  return (
    <TitleContainer>
      <TitleHeader>{contentTitle}</TitleHeader>
      {isContent && <More>더보기👉</More>}
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 4px 15px;
`;

const TitleHeader = styled.span`
  text-align: left;
  font-weight: bold;
  width: 75%;
`;

const More = styled.span`
  font-weight: bold;
  padding: 8px;
  text-align: right;
  width: 25%;
`;
export default Title;
