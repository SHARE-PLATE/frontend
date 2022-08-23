import styled, { css } from 'styled-components';

import { ChattingDetailInfoHeight } from '@components/ChattingDetailInfo/ChattingDetailInfo.style';
import { defaultPageStyle } from '@styles/mixin';

export const Wrapper = styled.div`
  ${defaultPageStyle};

  gap: 0;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopFixedWrapper = styled.div`
  ${({ theme: { defaultHeaderHeight, defaultWidth } }) => css`
    ${defaultWidth};

    width: 100%;
    position: fixed;
    top: 0;
    box-shadow: 0px 5px 5px #bbbaba47;

    + * {
      padding-top: ${defaultHeaderHeight + ChattingDetailInfoHeight}rem;
    }
  `}
`;
