import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 1.25rem;
`;

export const Content = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.small}
    display: inline-block;
    border-radius: 0.25rem;
    background-color: ${colors.orange2};
    padding: 0.2rem 0.5rem;
    height: 1.25rem;
    color: ${colors.white1};
  `}
`;
