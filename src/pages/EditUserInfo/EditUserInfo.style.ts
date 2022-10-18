import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { colors, defaultPadding } }) => css`
    ${defaultPadding}
    background-color: ${colors.white1};
    flex-grow: 1;
  `}
`;

export const FileForm = styled.input`
  display: none;
`;
