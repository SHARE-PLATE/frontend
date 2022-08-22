import styled from 'styled-components';

export const ChattingDetailInfoHeight = 4.5; // rem

export const Wrapper = styled.div`
  height: ${ChattingDetailInfoHeight}rem;
  display: flex;
  align-items: center;
  z-index: 3;
  gap: 0.38rem;
`;

export const ImgWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  min-width: 3rem;
  border-radius: 0.25rem;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  max-width: calc(100% - 2rem - 1.5rem);
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Numbers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
