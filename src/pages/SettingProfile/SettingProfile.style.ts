import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/mixin';

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white1};
    flex-grow: 1;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => theme.defaultPadding}
  border-bottom: 0.375rem solid ${({ theme }) => theme.colors.grey1};
`;

export const ProfileEditBtn = styled.button`
  ${({ theme: { fonts, colors } }) => css`
    ${flexCenter};
    ${fonts.largeBold};
    background: ${colors.orange4};
    color: ${colors.white0};
    border-radius: 0.375rem;
    width: 100%;
    height: 3rem;
    margin: 1.5rem 0;
  `}
`;

export const Contents = styled.div`
  ${({ theme }) => theme.defaultPadding}
`;
