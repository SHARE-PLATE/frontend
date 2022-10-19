import styled, { css } from 'styled-components';

export const HeaderBtn = styled.button`
  height: 100%;
  align-items: center;
  display: flex;
`;

export const DeleteModeButton = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.largeRegular};
  `}
`;
