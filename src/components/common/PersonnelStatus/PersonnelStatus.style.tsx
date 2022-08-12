import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const IconWrapper = styled.div`
  height: 1.25rem;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.small};

    height: 1.25rem;
    background-color: ${colors.orange2};
    color: ${colors.white1};
    display: inline-block;
    border-radius: 0.25rem;
    padding: 0.2rem 0.5rem;
  `}
`;
