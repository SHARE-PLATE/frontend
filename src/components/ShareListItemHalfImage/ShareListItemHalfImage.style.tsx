import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isEmpty?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  width: 48%;
  min-width: 9.5rem;
  border-radius: 0.5rem;
  ${({ isEmpty }) =>
    !isEmpty &&
    css`
      box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.08);
    `}
`;

export const InfoWrapper = styled.div`
  ${({ theme: { fonts } }) => css`
    display: flex;
    padding: 0.5rem 0.375rem;
    flex-direction: column;
    gap: 0.4rem;
    padding-top: 0.5rem;

    > :nth-child(1) {
      ${fonts.mediumRegular};

      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    > :nth-child(2) {
      ${fonts.smallBold}
    }

    > :nth-child(3) {
      padding-top: 0.2rem;
    }
  `}
`;
