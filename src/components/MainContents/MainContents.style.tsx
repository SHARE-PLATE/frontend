import styled, { css } from 'styled-components';

import { subTitle } from '@styles/mixin';

export const Wrapper = styled.div`
  padding-bottom: 1rem;
`;

export const SubTitle = styled.div`
  ${subTitle}
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const More = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.small}
    color: ${colors.grey4};
  `}
`;

export const PreviewWrapper = styled.div`
  margin-top: 1rem;
`;
