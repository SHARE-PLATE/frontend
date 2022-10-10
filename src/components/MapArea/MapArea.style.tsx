import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  height: 100%;
  flex-grow: 1;
  padding: 0;
`;

export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Map = styled.div`
  width: 100%;
  flex-grow: 1;
  z-index: 1;
`;
