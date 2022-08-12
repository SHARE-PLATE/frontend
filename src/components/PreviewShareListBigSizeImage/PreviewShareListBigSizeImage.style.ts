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
  border-radius: 8px;
  @media (max-width: 27rem) {
    width: 100%;
    max-width: 24.4rem;
  }
  width: calc(50% - 0.75rem);
`;

export const ImgWrapper = styled.div`
  position: relative;
  height: 9.6rem;
  overflow: hidden;
  border-radius: 0.5rem;

  img {
    width: 100%;
    margin-top: -15%;
    /* 추후에 이미지 가운데 조정 필요 */
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.75rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 75%;
  flex-direction: column;
`;

export const Title = styled.h2`
  ${({ theme: { fonts } }) => css`
    ${fonts.large}
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
    ${fonts.xSmall}
    color: ${colors.grey7};
    padding-top: 0.4rem;
  `}
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-top: 0.5rem;
  align-items: center;
`;

export const Price = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.mediumBold};
  `}
`;

export const OriginPrice = styled.span`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.smallRegular};
    color: ${colors.grey4};
    text-decoration-line: line-through;
  `}
`;
