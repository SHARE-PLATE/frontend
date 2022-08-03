import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.2rem;
`;

export const Header = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.xLargeBold};
  `}
`;

export const Contents = styled.div`
  margin-top: 0.8rem;
  display: flex;
  gap: 0.8rem;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    background: transparent;
  }
`;

export const Content = styled.div`
  border: #d9d9df solid 1px;
  border-radius: 0.25rem;
  display: flex;
  width: fit-content;
  padding: 0.7rem 0.9rem;
  padding-top: 0.8rem;
  gap: 0.4rem;
  flex: 0 0 auto;

  ${({ theme: { fonts } }) => css`
    > :first-child {
      ${fonts.medium};
      font-weight: 600;
    }
    > :last-child {
      ${fonts.medium};
      font-weight: 400;
      color: #666666;
    }
  `}
`;
