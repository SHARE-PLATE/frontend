import styled, { css } from 'styled-components';

import { flexBetween } from '@styles/mixin';

export const Wrapper = styled.ul`
  padding-top: 1rem;
  ${flexBetween}
`;

export const Menu = styled.li`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.small}

    display: flex;
    position: relative;
    flex-direction: column;
    padding: 1rem;
    width: calc(100% / 3);

    ::after {
      display: flex;
      position: absolute;
      top: 40%;
      right: 0;
      color: ${colors.grey4};
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
