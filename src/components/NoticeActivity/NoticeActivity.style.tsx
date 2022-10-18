import styled, { css } from 'styled-components';

export const imgWidth = '3rem';

export const Wrapper = styled.div``;

export const Item = styled.div`
  display: flex;
  padding: 1rem 0;
  justify-content: space-between;
  gap: 0.75rem;

  > * {
    align-items: baseline;
  }
`;

export const TextWrapper = styled.div`
  line-height: 1rem;
  flex-grow: 1;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const ImgWrapper = styled.div`
  min-width: ${imgWidth};
`;

export const DescText = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.small};
    color: ${colors.grey4};
  `}
`;

export const DiffTime = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.smallRegular};
    color: ${colors.grey4};
    font-weight: 300;
  `}
`;
