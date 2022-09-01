import styled, { css } from 'styled-components';

import { ChatroomDetailInfoHeight } from '@components/ChatroomDetailInfo/ChatroomDetailInfo.style';
import { defaultPageStyle } from '@styles/mixin';

export const Wrapper = styled.div`
  ${defaultPageStyle}

  gap: 0;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopFixedWrapper = styled.div`
  ${({ theme: { defaultHeaderHeight, defaultWidth } }) => css`
    ${defaultWidth}

    position: fixed;
    top: 0;
    box-shadow: 0px 5px 5px #bbbaba47;
    width: 100%;

    + * {
      padding-top: ${defaultHeaderHeight + ChatroomDetailInfoHeight}rem;
    }
  `}
`;
