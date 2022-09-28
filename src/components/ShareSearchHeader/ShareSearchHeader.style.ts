import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    background-color: ${colors.white1};
    padding: 0.5rem 1rem;
  `}
`;

export const FormWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
`;

export const CloseBtn = styled.button`
  ${flexCenter}
  width: 10%;
  min-width: 30px;
  max-width: 50px;
`;

export const Form = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    border-radius: 0.5rem;
    background-color: ${colors.grey2};
    padding: 0.5rem;
    height: 3rem;
  `}
`;

export const Input = styled.input`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.large}
    margin-right: 0.5rem;
    border: none;
    background-color: ${colors.grey2};
    width: 100%;
  `}
`;
