import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: inline;
  text-align: center;
  justify-content: center;
`;

export const Content = styled.span`
  display: inline-block;
  color: white;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.orange2};
  `}
  border-radius: 4px;

  font-size: 12px;
  padding: 4px;
`;
