import styled, { css } from 'styled-components';

import { flexBetween } from '@styles/mixin';

export const Wrapper = styled.ul`
  padding-top: 1rem;
  ${flexBetween};
`;

export const Menu = styled.li`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.small};

    display: flex;
    flex-direction: column;
    position: relative;
    width: calc(100% / 3);
    padding: 1rem;

    ::after {
      content: '|';
      color: ${colors.grey4};
      font-size: 20px;
      font-weight: 700;
      position: absolute;
      display: flex;
      right: 0;
      top: 40%;
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
      font-weight: bold;
    }
  `}
`;
