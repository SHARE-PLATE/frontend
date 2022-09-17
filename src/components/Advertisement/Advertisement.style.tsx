import styled, { css } from 'styled-components';

export const AdWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    height: 100%;
    background-color: ${colors.orange1};
    border-radius: 0.5rem;
  `}
`;

export const AdsWrapper = styled.div``;

export const AdContentWrapper = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
  height: 100%;
`;
