import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { defaultHeaderHeight } }) => css`
    height: ${defaultHeaderHeight}rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 0.3rem;
`;

export const Location = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.xSmall};
    color: ${colors.grey4};
  `}
`;
