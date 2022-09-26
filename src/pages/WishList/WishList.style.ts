import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { defaultPadding, colors } }) => css`
    ${defaultPadding};
    background-color: ${colors.white1};
    flex-grow: 1;
  `}
`;

export const ListContent = styled.div``;

export const FailedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
`;

export const FailedText = styled.span`
  display: flex;
  margin: 0 auto;
  margin-bottom: 5rem;
  color: ${({ theme }) => theme.colors.grey7};
`;
