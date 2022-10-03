import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.375rem;
  align-items: flex-end;
`;

export const AddKeywordWrapper = styled.div`
  svg {
    filter: drop-shadow(2px 2px 4px #00000015);
  }
`;

export const AddKeywordBtn = styled.button`
  ${({ theme: { colors } }) => css`
    ${flexCenter}
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 35rem;
    background-color: ${colors.orange2};
    box-shadow: 2px 4px 8px rgba(255, 69, 58, 0.2);

    path {
      stroke: ${colors.white0};
      width: 1.33rem;
      height: 1.33rem;
    }
  `}
`;

export const ModalCustomStyle = css`
  bottom: 2rem;
`;
