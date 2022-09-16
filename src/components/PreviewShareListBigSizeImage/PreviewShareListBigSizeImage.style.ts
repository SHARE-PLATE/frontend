import styled, { css } from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.5rem;
  box-shadow: 0 2.5px 5px #00000020;
  width: calc(50% - 0.75rem);
  @media (max-width: 27rem) {
    width: 100%;
    max-width: 24.4rem;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0.5rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 75%;
  gap: 0.45rem;
`;

export const PersonnelStatusWrapper = styled.div`
  flex-basis: 1;
`;

export const Title = styled.h2`
  ${({ theme: { colors } }) => css`
    color: ${colors.grey6};
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

export const ImagePriceBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Location = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xSmall};
    color: ${colors.grey7};
  `}
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const Price = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.mediumBold}
  `}
`;

export const OriginPrice = styled.span`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.smallRegular}

    text-decoration-line: line-through;
    color: ${colors.grey4};
  `}
`;
