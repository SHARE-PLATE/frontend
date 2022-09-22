import styled, { css } from 'styled-components';

export const ItemWrapper = styled.div`
  position: relative;
  width: 9.62rem;
  height: 20.5rem;
  border-radius: 0.5rem;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.08);
`;

export const ImgWrapper = styled.div`
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding: 0.8rem 0.5rem;
`;

export const ItemTitle = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.mediumRegular}

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

export const ItemLocation = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.xSmallRegular}
    color: ${colors.grey4};
    /* font-weight: 400; */
  `}
`;

export const ItemPrice = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.smallBold}

    > :nth-child(2) {
      text-decoration: line-through;
      color: ${colors.grey4};
      ${fonts.xSmall}
    }
  `}
`;
