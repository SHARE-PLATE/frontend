import styled, { css } from 'styled-components';

export const ItemWrapper = styled.div`
  position: relative;
  width: 9.5rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-top: 0.8rem;
`;

export const ItemTitle = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.mediumBold}

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

export const ItemLocation = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.xSmall}
    color: ${colors.grey4};
    font-weight: 500;
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
