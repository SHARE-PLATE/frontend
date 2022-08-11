import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.37rem;
`;

export const ImgWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 30rem;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

export const InfoWrapper = styled.div`
  ${({ theme: { fonts } }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-weight: 500;

    > :nth-child(2) {
      ${fonts.xSmall};
    }
  `}
`;

export const InfoDetailWrapper = styled.span`
  ${({ theme: { colors } }) => css`
    display: flex;
    gap: 0.35rem;
    color: ${colors.grey4};

    .number {
      color: ${colors.orange2};
    }
  `}
`;

export const FollowBtn = styled.button`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xSmallBold};

    background-color: ${colors.orange0};
    align-items: center;
    justify-content: center;
    color: ${colors.orange2};
    border-radius: 0.25rem;
    display: flex;
    width: 3.5rem;
    height: 1.6rem;
    gap: 0.25rem;
  `}
`;
