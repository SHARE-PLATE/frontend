import styled from 'styled-components';

import PersonnelStatus from '@components/common/PersonnelStatus';
import { listExampleType } from '@data/shareList';

interface PreviewShareListPropsType {
  data: listExampleType[];
}
const PreviewShareList = ({ data }: PreviewShareListPropsType) => {
  return (
    <Wrapper>
      {data.map((listItem: listExampleType) => (
        <Container key={listItem.id}>
          <img src={listItem.thumbnailUrl} alt={listItem.title} width='100' height='100'></img>
          <ListInfo>
            <Title>{listItem.title}</Title>
            <Location>{listItem.location} / 시간</Location>
            <Cost>{listItem.price}</Cost>
            <div>
              <PersonnelStatus curPersonnel={1} totalPersonnel={4} />
            </div>
          </ListInfo>
        </Container>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  padding-left: 20px;

  img {
    position: absolute;
    top: 0px;
    border-radius: 8px;
  }
`;

const ListInfo = styled.div`
  position: absolute;
  left: 36%;
  padding: 3px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow-wrap: break-word;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  overflow-wrap: break-word;
`;
const Location = styled.div`
  color: #918b8b;
  font-size: 10px;
`;
const Cost = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

>>>>>>> 3307aa3fd78d60e5060b2e24e472b3afa0c89e8c
export default PreviewShareList;
