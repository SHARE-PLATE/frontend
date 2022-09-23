import { useState } from 'react';

import { useRecoilState } from 'recoil';
import { v4 as getRandomKey } from 'uuid';

import * as S from '@components/ShareForm/Option/OptionPortal/OptionPortal.style';
import Icon from '@components/common/Icon';
import { tagList } from '@store/shareRegistration';

const HashTag = () => {
  const [tagListValue, setTagListValue] = useRecoilState(tagList);
  const [tagItem, setTagItem] = useState<string>('');

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      submitTagItem();
    }
  };

  const submitTagItem = () => {
    if (tagListValue.length >= 5) return setTagItem('');
    const updatedTagList = [...tagListValue];
    updatedTagList.push(tagItem);

    const setArr = new Set(updatedTagList);
    setTagListValue([...setArr]);
    setTagItem('');
  };

  const deleteTagItem = (deleteTagItem: string) => {
    const filteredTagList = tagListValue.filter((tagItem) => tagItem !== deleteTagItem);
    setTagListValue(filteredTagList);
  };

  return (
    <S.HashTagContainer>
      <S.CategoryTitle>태그</S.CategoryTitle>
      <S.TagBox>
        {tagListValue.map((tagItem) => {
          return (
            <S.TagItem key={getRandomKey()}>
              <span>{tagItem}</span>
              <Icon iconName='X_Icon' handleClick={() => deleteTagItem(tagItem)} />
            </S.TagItem>
          );
        })}
        <S.TagInput
          type='text'
          placeholder='#태그를 입력해주세요. (최대 5개)'
          onChange={(e) => setTagItem(e.target.value)}
          value={tagItem}
          onKeyPress={onKeyPress}
        />
      </S.TagBox>
    </S.HashTagContainer>
  );
};

export default HashTag;
