import styled, { css } from 'styled-components';

import { navigationBarHeight } from '@components/NavigationBar/NavigationBar.style';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 0;
`;

export const Date = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.smallRegular}
    padding-top: 1rem;
    text-align: center;
    color: ${colors.grey4};
  `}
`;

export const EmptyBlock = styled.div`
  height: ${navigationBarHeight};
  width: 100%;
`;
