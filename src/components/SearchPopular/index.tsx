import { FormEvent } from 'react';

import * as S from '@components/SearchPopular/SearchPopular.style';
import { popularKeyword } from '@constants/mentions';

const popularKeywordsInfo = [
  { id: 0, name: '고구마' },
  { id: 1, name: '치킨' },
  { id: 2, name: '떡볶이' },
  { id: 3, name: '당근' },
  { id: 4, name: '파프리카' },
];

type SearchPopularPropsType = {
  clickHandler: (event: FormEvent | string) => void;
};

const SearchPopular = ({ clickHandler }: SearchPopularPropsType) => {
  const popularKeywordsContents = popularKeywordsInfo.map(({ id, name }, index) => (
    <S.Content key={id} onClick={() => clickHandler(name)}>
      <div>{index < 10 ? `0${index + 1}` : index + 1}</div>
      <div>{name}</div>
    </S.Content>
  ));

  return (
    <S.Wrapper>
      <S.Header>{popularKeyword}</S.Header>
      <S.Contents>{popularKeywordsContents}</S.Contents>
    </S.Wrapper>
  );
};

export default SearchPopular;
