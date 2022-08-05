import * as S from '@components/PreviewShareListCenterImage/PreviewShareListCenterImage.style';
import PersonnelStatus from '@components/common/PersonnelStatus';
import { sharingExampleType } from '@data/sharing';

interface PreviewShareListCenterImagePropsType {
  title: string;
  data: sharingExampleType[] | undefined;
}

const PreviewShareListCenterImage = ({ title, data }: PreviewShareListCenterImagePropsType) => {
  return data ? (
    <S.Wrapper>
      {data.map((listItem) => (
        <S.Container key={listItem.id}>
          <img src={listItem.thumbnailUrl} alt={listItem.title} width='110' height='110' />
          <S.ShareInfo>
            <h2>{listItem.title}</h2>
            <PersonnelStatus curPersonnel={1} totalPersonnel={4} />
          </S.ShareInfo>
        </S.Container>
      ))}
    </S.Wrapper>
  ) : (
    <S.Container>현재 {title}하신 목록이 없습니다. </S.Container>
  );
};

export default PreviewShareListCenterImage;
