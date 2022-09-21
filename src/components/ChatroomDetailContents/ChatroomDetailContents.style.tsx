import styled, { css } from 'styled-components';

import { navigationBarHeight } from '@components/NavigationBar/NavigationBar.style';

export const Wrapper = styled.div`
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

export const Chats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1rem;
`;

export const EmptyBlock = styled.div`
  height: ${navigationBarHeight};
  width: 100%;
`;
