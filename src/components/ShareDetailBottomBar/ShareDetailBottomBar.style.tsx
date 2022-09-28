import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { defaultWidth, defaultPadding, colors } }) => css`
    ${defaultPadding}
    ${defaultWidth}

    display: flex;
    position: fixed;
    bottom: 0;
    gap: 0.5rem;
    justify-content: space-between;
    box-shadow: 0px -8px 16px rgba(0, 0, 0, 0.08);
    background-color: ${colors.white1};
    width: 100%;
    height: 4.5rem;
  `}
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.2rem;
`;

export const IconWrapper = styled.div<{ isWished?: boolean }>`
  ${({ theme: { colors }, isWished }) => css`
    ${isWished &&
    css`
      svg {
        fill: ${colors.pink0};
      }
      path {
        stroke: ${colors.pink0};
      }
    `}
  `}
`;

export const PriceWrapper = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    align-items: center;
    margin-left: 0.75rem;
    min-width: 4.9rem;

    > :nth-child(1) {
      ${fonts.xLargeBold}
      min-width: 4.7rem;
      text-align: center;
    }

    > :nth-child(2) {
      min-width: 4.7rem;
      text-align: center;
      text-decoration: line-through;
      color: ${colors.grey4};
    }
  `}
`;

export const RightWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const Button = styled.button<{ blur?: boolean }>`
  ${({ theme: { colors, fonts }, blur }) => css`
    ${fonts.largeBold}

    border-radius: 0.5rem;
    background-color: ${blur ? colors.orange4 : colors.orange2};
    width: 6.25rem;
    height: 2.5rem;
    color: ${colors.white1};
  `}
`;

export const ScrollToTopBtnWrapper = styled.div`
  position: absolute;
  top: calc(-2.25rem - 1rem);
  right: 1rem;
`;
