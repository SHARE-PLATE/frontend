import styled, { css } from 'styled-components';

export type TitleHeaderSizeType = 'MEDIUM' | 'LARGE';

type TitleHeaderPropsType = { size: TitleHeaderSizeType };

export const TitleContainer = styled.div<TitleHeaderPropsType>`
  ${({ size }) => css`
    ${size === 'MEDIUM' &&
    css`
      padding-top: 1rem;
    `}
    ${size === 'LARGE' &&
    css`
      padding-top: 2rem;
    `}

    display: flex;
    flex-flow: row wrap;
  `}
`;

export const TitleHeader = styled.span<TitleHeaderPropsType>`
  ${({ theme: { fonts }, size }) => css`
    ${size === 'MEDIUM' && fonts.largeBold};
    ${size === 'LARGE' && fonts.xLargeBold};

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `}
`;

export const OptionButton = styled.button`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.small};
    font-weight: 500;
    color: ${colors.grey4};
  `}
`;
