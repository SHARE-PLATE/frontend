import styled, { css } from 'styled-components';

export const RemainedTimeWrapper = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xSmallBold};
    color: ${colors.white1};
    background-color: ${colors.orange2};
    padding: 0.2rem 0.4rem;
    border-radius: 0.4rem;
    display: inline-block;
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
  `}
`;
