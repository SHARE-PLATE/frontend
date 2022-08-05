import styled, { css } from 'styled-components';

interface TitlePropsType {
  contentTitle: string;
  isContent?: boolean;
}

const Title = ({ contentTitle, isContent = false }: TitlePropsType) => {
  return (
    <TitleContainer>
      <TitleHeader>
        {contentTitle}
        {isContent && <div>더보기 👉</div>}
      </TitleHeader>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 1rem;
`;

const TitleHeader = styled.span`
  ${({ theme: { fonts } }) => css`
    ${fonts.large};
  `}

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  width: 100%;
`;

export default Title;
