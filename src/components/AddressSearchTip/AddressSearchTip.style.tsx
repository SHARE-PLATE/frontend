import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 1rem !important;
`;

export const Title = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.mediumBold};
  `}
`;

export const List = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Item = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.medium};
    line-height: 1.38rem;

    #strong {
      font-weight: 700;
    }
  `}
`;

export const ItemTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemDot = styled.span`
  width: 1rem;
`;

export const ItemExample = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.mediumRegular};
    color: ${colors.grey4};
    padding-left: 1rem;
  `}
`;
