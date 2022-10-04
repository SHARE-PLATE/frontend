import { useState } from 'react';

import { useRecoilState } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import * as S from '@components/OptionPortal/OptionPortal.style';
import Icon from '@components/common/Icon';
import { tagInputPlaceholderMention } from '@constants/mentions';
import { TAG } from '@constants/words';
import { tagsState } from '@store/shareRegistration';

const HashTag = () => {
  const [tags, setTags] = useRecoilState(tagsState);
  const [tagItem, setTagItem] = useState<string>('');

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      submitTagItem();
    }
  };

  const submitTagItem = () => {
    if (tags.length >= 5) return setTagItem('');
    const updatedTagList = [...tags];
    updatedTagList.push(tagItem);

    const setArr = new Set(updatedTagList);
    setTags([...setArr]);
    setTagItem('');
  };

  const deleteTagItem = (deleteTagItem: string) => {
    const filteredTagList = tags.filter((tagItem) => tagItem !== deleteTagItem);
    setTags(filteredTagList);
  };

  const tagsList = tags.map((tagItem) => (
    <S.TagItem key={getRandomKey()}>
      <span>{tagItem}</span>
      <Icon iconName='HashDelete' handleClick={() => deleteTagItem(tagItem)} />
    </S.TagItem>
  ));

  return (
    <S.HashTagContainer>
      <S.CategoryTitle>{TAG}</S.CategoryTitle>
      <S.TagBox>
        {tagsList.length < 5 && (
          <S.TagInput
            type='text'
            maxLength={10}
            placeholder={tagInputPlaceholderMention}
            onChange={(e) => setTagItem(e.target.value)}
            value={tagItem}
            onKeyPress={handleKeyPress}
          />
        )}
        <S.TagsListWrapper>{tagsList}</S.TagsListWrapper>
      </S.TagBox>
    </S.HashTagContainer>
  );
};

export default HashTag;
