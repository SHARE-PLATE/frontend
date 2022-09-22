import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 1.5rem;
  padding-left: 1rem;
`;

export const Header = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.xLargeBold}
  `}
`;

export const Contents = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.8rem;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    background: transparent;
  }
`;

export const Content = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex: 0 0 auto;
    gap: 0.4rem;
    border: ${colors.grey3} solid 1px;
    border-radius: 0.25rem;
    cursor: pointer;
    padding: 0.5rem 0.7rem;
    width: fit-content;
  `}

  ${({ theme: { fonts, colors } }) => css`
    > :first-child {
      ${fonts.medium}
      font-weight: 600;
    }
    > :last-child {
      ${fonts.medium}
      color: ${colors.grey5};
      font-weight: 400;
    }
  `}
`;
