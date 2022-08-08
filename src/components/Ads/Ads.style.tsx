import styled, { css } from 'styled-components';

export const AdWrapper = styled.div`
  height: 100%;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.orange1};
  `}
`;

export const AdsWrapper = styled.div``;

export const AdContentWrapper = styled.div`
  display: flex;
  height: calc(100% + 3rem);
  align-items: center;
  justify-content: center;
`;
