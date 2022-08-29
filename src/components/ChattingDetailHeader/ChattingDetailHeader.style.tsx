import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { defaultHeaderHeight } }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${defaultHeaderHeight}rem;
  `}
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  justify-content: center;
  text-align: center;
`;

export const Location = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.xSmall}
    color: ${colors.grey4};
  `}
`;
