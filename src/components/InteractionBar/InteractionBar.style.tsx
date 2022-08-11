import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { defaultPadding, colors } }) => css`
    ${defaultPadding};
    background-color: ${colors.white1};
    height: 4.5rem;
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
  `}
`;

export const LeftWrapper = styled.div`
  margin-left: 0.2rem;
  display: flex;
  align-items: center;
`;

export const PriceWrapper = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    margin-left: 0.75rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.4rem;
    min-width: 4.9rem;

    > :nth-child(1) {
      ${fonts.xLargeBold};
      min-width: 4.7rem;
      text-align: center;
    }

    > :nth-child(2) {
      text-align: center;
      min-width: 4.7rem;
      color: ${colors.grey4};
      text-decoration: line-through;
    }
  `}
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Button = styled.button`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.largeBold};
    background-color: ${colors.orange2};
    color: ${colors.white1};
    border-radius: 0.5rem;
    width: 6.25rem;
    height: 2.5rem;
  `}
`;

export const ScrollToTopBtnWrapper = styled.div`
  position: absolute;
  top: calc(-2.25rem - 1rem);
  right: 1rem;
`;
