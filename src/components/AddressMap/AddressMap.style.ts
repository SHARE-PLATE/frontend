import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;

  svg {
    position: absolute;
    top: 5%;
    left: 5%;
    z-index: 2;
  }

  .map-area {
    width: 755px;
    height: 100%;
    z-index: 1;
  }
`;

export const MapContainer = styled.div`
  width: 755;
  height: 100%;
  flex: 90;
`;

export const LocationDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 4px;
  flex: 10;
  margin-top: 24px;
`;

export const FirstAddress = styled.span`
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.3px;
`;

export const SecondAddress = styled.span`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.3px;
  color: #999999;
`;

export const overlayStyle = `
padding: 10px 10px;
font-weight: 500;
font-size: 12px;
position: relative;
background: #ffae00;
border-radius: 4px;
`;
// after: {
//   content: '';
//   position: absolute;
//   bottom: 0;
//   left: 50%;
//   width: 0;
//   height: 0;
//   border: 35px solid transparent;
//   border-top-color: #ffae00;
//   border-bottom: 0;
//   border-left: 0;
//   margin-left: -17.5px;
//   margin-bottom: -35px;
// }
