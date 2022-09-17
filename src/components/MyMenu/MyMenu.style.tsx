import styled, { css } from 'styled-components';

import { flexBetween } from '@styles/mixin';

export const Wrapper = styled.ul`
  ${({ theme: { colors } }) => css`
    ${flexBetween}
    margin-top: 1rem;
    height: 5.6rem;
    border-radius: 0.75rem;
    background-color: ${colors.white0};
  `}
`;

export const Menu = styled.li`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.small}

    display: flex;
    position: relative;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
    width: calc(100% / 3);

    ::after {
      display: flex;
      position: absolute;
      top: 40%;
      right: 0;
      color: ${colors.red0};
      font-size: 20px;
      font-weight: 700;
      content: '|';
    }

    :last-child::after {
      content: '';
    }

    svg {
      margin: 0px auto;
      margin-bottom: 8px;
    }

    p {
      text-align: center;
      ${fonts.small}
    }
  `}
`;
