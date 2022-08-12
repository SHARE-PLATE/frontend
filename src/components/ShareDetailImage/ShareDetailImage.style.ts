import styled from 'styled-components';

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;

  padding: 7px 24px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 26px;
  line-height: 28px;
  color: '#010101';
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const LocationInfo = styled.div`
  display: flex;
  gap: 8px;
`;

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  background: #ff5c21;
  border-radius: 4px;
  color: #fff;
`;

export const CreateTime = styled.div`
  color: #a8a8a8;
  font-size: 10px;
`;

export const Image = styled.img`
  float: left;
  margin-right: 20px;
  border-radius: 50px;
  width: 60px;
  height: 60px;
`;

export const Description = styled.div`
  font-weight: 400;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: 0.4px;

  color: #757575;
`;
