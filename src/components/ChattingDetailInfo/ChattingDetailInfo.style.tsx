import styled from 'styled-components';

export const ChattingDetailInfoHeight = 4.5; // rem

export const Wrapper = styled.div`
  display: flex;
  gap: 0.38rem;
  align-items: center;
  z-index: 3;
  height: ${ChattingDetailInfoHeight}rem;
`;

export const ImgWrapper = styled.div`
  border-radius: 0.25rem;
  width: 3rem;
  min-width: 3rem;
  height: 3rem;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: calc(100% - 2rem - 1.5rem);
  flex-direction: column;
  gap: 0.5rem;
  max-width: calc(100% - 2rem - 1.5rem);
`;

export const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Numbers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
