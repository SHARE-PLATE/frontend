import styled, { css } from 'styled-components';

export const ContentsContainer = styled.div`
  ${({ theme: { defaultPadding } }) => css`
    ${defaultPadding};
    padding-top: 1.2rem;
  `}
`;

export const Title = styled.h2`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.xLarge};
    font-weight: 500;
    line-height: 1.5rem;
    color: ${colors.black};
  `}
`;

export const UpperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.75rem;
  align-items: center;
`;

export const LocationInfo = styled.div`
  display: flex;
  text-align: center;
  gap: 0.75rem;
`;

export const Location = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.small};
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem 0.6rem;
    background: ${colors.orange2};
    border-radius: 0.25rem;
    color: ${colors.white1};
  `}
`;

export const LowerInfo = styled.div`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  display: flex;
  justify-content: space-between;
`;

export const CreateTime = styled.div`
  ${({ theme: { colors } }) => css`
    color: ${colors.grey7};
    font-size: 10px;
  `}
`;

export const ImgWrapper = styled.div`
  border-radius: 10rem;
  width: 2.9rem;
  height: 2.9rem;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

export const Description = styled.div`
  ${({ theme: { colors } }) => css`
    border-top: solid 1px ${colors.grey1};
    padding-top: 1.25rem;
    padding-bottom: 0.75rem;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: ${colors.black};
  `}
`;
