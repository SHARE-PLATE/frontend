import { FormEvent } from 'react';

import * as S from '@components/SearchPopular/SearchPopular.style';
import { popularKeywordMention } from '@constants/mentions';
import { popularKeywordsInfo } from '@constants/popularKeywords';

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
      <S.Header>{popularKeywordMention}</S.Header>
      <S.Contents>{popularKeywordsContents}</S.Contents>
    </S.Wrapper>
  );
};

export default SearchPopular;
