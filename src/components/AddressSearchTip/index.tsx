import * as S from '@components/AddressSearchTip/AddressSearchTip.style';
import { SEARCH_TIP } from '@constants/words';

const searchTipInfo = [
  {
    id: 0,
    title: (
      <>
        도로명 + <span id='strong'>건물번호</span>
      </>
    ),
    example: '강남대로 570',
  },
  {
    id: 1,
    title: (
      <>
        동/읍/면/리 + <span id='strong'>번지</span>
      </>
    ),
    example: '신천동 7-30',
  },
  { id: 2, title: <>건물명, 아파트명</>, example: '광교경남아너스빌' },
];

const AddressSearchTip = () => {
  const SearchTipList = searchTipInfo.map(({ id, title, example }) => (
    <S.Item key={id}>
      <S.ItemTitle>
        <S.ItemDot>•</S.ItemDot>
        {title}
      </S.ItemTitle>
      <S.ItemExample>(예: {example})</S.ItemExample>
    </S.Item>
  ));

  return (
    <S.Wrapper>
      <S.Title>{SEARCH_TIP}</S.Title>
      <S.List>{SearchTipList}</S.List>
    </S.Wrapper>
  );
};
export default AddressSearchTip;
