import styled from 'styled-components';

const PersonnelStatus = () => {
  return (
    <Wrapper>
      <Content>3 / 4</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline;
  text-align: center;
  justify-content: center;
  background-color: #ff5c21;
  border-radius: 4px;
`;

const Content = styled.span`
  color: white;
  font-size: 12px;
  padding: 4px;
`;

export default PersonnelStatus;
