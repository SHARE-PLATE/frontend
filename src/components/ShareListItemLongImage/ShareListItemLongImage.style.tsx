import styled, { css } from 'styled-components';

export const ItemWrapper = styled.div`
  width: 9.5rem;
  position: relative;
`;

export const ImgWrapper = styled.div`
  width: 9.5rem;
  overflow: hidden;
  aspect-ratio: 15 / 24;
  border-radius: 0.5rem;
`;

export const StyledImg = styled.img`
  height: 100%;
  margin-left: -50%;
`;

export const InfoWrapper = styled.div`
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const ItemTitle = styled.div`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ItemLocation = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.xSmall};
    color: ${colors.grey4};
    font-weight: 500;
  `}
`;

export const ItemPrice = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.smallBold};

    > :nth-child(2) {
      text-decoration: line-through;
      color: ${colors.grey4};
      ${fonts.xSmall};
    }
  `}
`;
