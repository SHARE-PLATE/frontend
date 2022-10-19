import styled, { css } from 'styled-components';

import { noScrollBar } from '@styles/mixin';

export const itemHeight = '3.9rem';

export const Wrapper = styled.div`
  ${noScrollBar}
  overflow-y: scroll;
`;

export const ItemWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  margin: 1rem 0;
  height: ${itemHeight};

  > * {
    flex-basis: 1;
  }
`;

export const ImgWrapper = styled.div`
  min-width: ${itemHeight};
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 60%;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const TextUpper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const LocationBox = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.xSmallBold}

    padding: 0.3rem 0.4rem;
    color: ${colors.white0};
    font-weight: 500;

    border-radius: 0.25rem;
    background-color: ${colors.orange2};
  `}
`;

export const EnrollMention = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.smallRegular};
    color: ${colors.grey4};
  `}
`;

export const TitleWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DiffTime = styled.div`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.smallRegular}
    padding-top: 0.2rem;
    padding-bottom: 0.1rem;
    font-weight: 400;
    color: ${colors.grey4};
  `}
`;
