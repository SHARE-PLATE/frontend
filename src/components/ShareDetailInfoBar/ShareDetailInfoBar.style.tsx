import styled from 'styled-components';

export const ChatroomDetailInfoHeight = 4.5; // rem

export const Wrapper = styled.div`
  height: ${ChatroomDetailInfoHeight}rem;
  display: flex;
  gap: 0.38rem;
  align-items: center;
  z-index: 3;
  gap: 0.38rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 100%;
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
  align-items: center;
  justify-content: space-between;
`;
