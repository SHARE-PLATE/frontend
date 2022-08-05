import styled from 'styled-components';

import PersonnelStatus from '@components/common/PersonnelStatus';
import { sharingExampleType } from '@data/sharing';

interface PreviewShareListCenterImagePropsType {
  title: string;
  data: sharingExampleType[] | undefined;
}

const PreviewShareListCenterImage = ({ title, data }: PreviewShareListCenterImagePropsType) => {
  return data ? (
    <Wrapper>
      {data.map((listItem) => (
        <Container key={listItem.id}>
          <img src={listItem.thumbnailUrl} alt={listItem.title} width='110' height='110' />
          <ShareInfo>
            <h2>{listItem.title}</h2>
            <PersonnelStatus curPersonnel={1} totalPersonnel={4} />
          </ShareInfo>
        </Container>
      ))}
    </Wrapper>
  ) : (
    <Container>현재 {title}하신 목록이 없습니다. </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  overflow-y: scroll;
  width: 100%;
  margin-bottom: 15px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;

  img {
    border-radius: 20px;
  }
`;

const ShareInfo = styled.div`
  width: 110px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  font-weight: bold;
  margin: 10px 5px;
`;

export default PreviewShareListCenterImage;
