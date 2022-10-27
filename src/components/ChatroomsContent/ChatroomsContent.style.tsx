import styled, { css } from 'styled-components';

export const ContentsWrapper = styled.div`
  ${({ theme: { defaultPadding } }) => css`
    ${defaultPadding};
  `}
`;

export const AdditionalModalStyle = css`
  padding: 0 !important;
`;
