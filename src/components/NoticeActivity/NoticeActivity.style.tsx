import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Item = styled.div`
  display: flex;
  padding-top: 1.2rem;
  padding-bottom: 1rem;
  justify-content: space-between;
  gap: 0.75rem;

  > * {
    flex-basis: 1;
  }
`;

export const TextWrapper = styled.div`
  flex-grow: 1;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const DescText = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.small};
    color: ${colors.grey4};
  `}
`;

export const DiffTime = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.smallRegular};
    color: ${colors.grey4};
    font-weight: 300;
  `}
`;
