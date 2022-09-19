import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const ErrorWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    color: ${colors.grey7};
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
