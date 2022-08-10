import styled, { css } from 'styled-components';

export const RemainedTimeWrapper = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xSmallBold}
    width: 2.5rem;
    text-align: center;
    display: inline-block;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    border-radius: 0.4rem;
    background-color: ${colors.orange2};
    padding: 0.2rem 0.4rem;
    color: ${colors.white1};
  `}
`;
