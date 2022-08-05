import styled, { css } from 'styled-components';

import PersonnelStatus from '@components/common/PersonnelStatus';
import { sharingExampleType } from '@data/sharing';

interface PreviewShareListCenterImagePropsType {
  title: string;
  data: sharingExampleType[] | undefined;
}

const PreviewShareListCenterImage = ({ title, data }: PreviewShareListCenterImagePropsType) => {
  const noListMention = `현재 ${title}하신\n목록이 없습니다.`;

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
    <NoListContainer>{noListMention}</NoListContainer>
  );
};

const Wrapper = styled.div`
  display: flex;
  overflow-y: scroll;
  width: 100%;
  padding: 1rem 0;
  gap: 0.75rem;
`;

const Container = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.medium};
  `}
  display: flex;
  flex-direction: column;

  img {
    border-radius: 20px;
  }
`;

const NoListContainer = styled.div`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.grey4};
    ${fonts.medium};
  `}
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0;
  text-align: center;
  line-height: 1.2rem;
  white-space: pre;

  img {
    border-radius: 20px;
  }
`;

const ShareInfo = styled.div`
  ${({ theme: { fonts } }) => css`
    ${fonts.medium};
  `}

  width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;

  > h2 {
    margin-top: 0.5rem;
    font-weight: 600;
  }
`;

export default PreviewShareListCenterImage;
