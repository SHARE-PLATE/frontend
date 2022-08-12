import styled, { css } from 'styled-components';

interface LocationBottomStyleType {
  locationBottom: boolean;
}

const bottomStyles = css<LocationBottomStyleType>`
  ${({ locationBottom }) =>
    locationBottom &&
    css`
      bottom: 0.5rem;
      left: 0.5rem;
    `}

  ${({ locationBottom }) =>
    !locationBottom &&
    css`
      top: 0.5rem;
      left: 0.5rem;
    `}
`;

export const RemainedTimeWrapper = styled.div<LocationBottomStyleType>`
  ${bottomStyles}
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xSmallBold}

    display: inline-block;
    position: absolute;

    border-radius: 0.4rem;
    background-color: ${colors.orange2};
    padding: 0.2rem 0.4rem;
    width: 2.5rem;
    text-align: center;
    color: ${colors.white1};
  `}
`;
