import styled, { css } from 'styled-components';

export const LowerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.8rem;
  padding-bottom: 0.75rem;
`;

export const PersonnelStatusWrapper = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.medium}
    font-weight: 500;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.75rem;
  `}
`;

export const ImgContentsWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
