import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.375rem;
  align-items: flex-end;
`;

export const AddKeywordBtn = styled.button`
  ${({ theme: { colors } }) => css`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 35rem;
    background-color: ${colors.orange2};

    path {
      stroke: ${colors.white0};
      width: 1.33rem;
      height: 1.33rem;
    }
  `}
`;
