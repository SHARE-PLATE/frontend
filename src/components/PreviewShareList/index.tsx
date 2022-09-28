import * as S from '@components/PreviewShareList/PreviewShareList.style';
import PersonnelStatus from '@components/common/PersonnelStatus';
import { ShareListType } from '@type/shareList';
interface PreviewShareListPropsType {
  data: ShareListType[];
}
const PreviewShareList = ({ data }: PreviewShareListPropsType) => {
  return (
    <S.Wrapper>
      {data.map((listItem: ShareListType) => (
        <S.Container key={listItem.id}>
          <img src={listItem.thumbnailUrl} alt={listItem.title} width='100' height='100'></img>
          <S.ListInfo>
            <S.Title>{listItem.title}</S.Title>
            <S.Location>{listItem.location} / 시간</S.Location>
            <S.Cost>{listItem.price}</S.Cost>
            <div>
              <PersonnelStatus curPersonnel={1} totalPersonnel={4} />
            </div>
          </S.ListInfo>
        </S.Container>
      ))}
    </S.Wrapper>
  );
};

export default PreviewShareList;
