import styled, { css } from 'styled-components';

export const ContentsContainer = styled.div`
  ${({ theme: { defaultPadding } }) => css`
    ${defaultPadding}
    padding-top: 1.2rem;
  `}
`;

export const Title = styled.h2`
  ${({ theme: { fonts, colors } }) => css`
    ${fonts.xLarge}
    line-height: 1.5rem;
    color: ${colors.black};
    font-weight: 500;
  `}
`;

export const UpperInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.75rem;
`;

export const LocationInfo = styled.div`
  display: flex;
  gap: 0.75rem;
  text-align: center;
`;

export const Location = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    ${fonts.small}

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    background: ${colors.orange2};
    padding: 0.4rem 0.6rem;
    color: ${colors.white1};
    font-weight: 500;
  `}
`;

export const LowerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
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
    display: flex;
    align-items: center;
    border-top: solid 1px ${colors.grey1};
    padding-top: 1.25rem;
    padding-bottom: 0.75rem;
    line-height: 20px;
    color: ${colors.black};
  `}
`;
