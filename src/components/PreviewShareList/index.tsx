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
  padding-left: 20px;
  width: 100%;
  height: 100px;

  img {
    position: absolute;
    top: 0px;
    border-radius: 8px;
  }
`;

const ListInfo = styled.div`
  display: flex;
  position: absolute;
  left: 36%;
  flex-direction: column;
  gap: 6px;
  padding: 3px;
  overflow-wrap: break-word;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  overflow-wrap: break-word;
`;
const Location = styled.div`
  color: #918b8b;
  font-size: 10px;
`;
const Cost = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export default PreviewShareList;
