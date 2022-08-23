import { FormEvent } from 'react';

import { useRecoilState } from 'recoil';
import { v4 as createRandomKey } from 'uuid';

import * as S from '@components/SearchRecent/SearchRecent.style';
import Icon from '@components/common/Icon';
import { noRecentListMention } from '@constants/mentions';
import { RECENT_KEYWORD, DELETE_ALL, SEARCH_RECENT } from '@constants/words';
import { searchRecent } from '@store/localStorage';
import { setLocalStorageInfo } from '@utils/localStorage';

type SearchRecentPropsType = {
  clickHandler: (event: FormEvent | string) => void;
};

const SearchRecent = ({ clickHandler }: SearchRecentPropsType) => {
  // 배열 내에 잘못된 값이 들어오는 경우에 대한 추가 처리 필요
  const [recentListInfoMap, setRecentListInfoMap] = useRecoilState(searchRecent);

  const handleClickDeleteBtn = ({ name }: { name?: string }) => {
    const newMap = new Map([...recentListInfoMap]);

    if (name) newMap.delete(name);
    if (!name) newMap.clear();

    setLocalStorageInfo({ key: SEARCH_RECENT, info: [...newMap] });
    setRecentListInfoMap(newMap);
  };

  const noRecentList = <S.NoRecentListWrapper>{noRecentListMention}</S.NoRecentListWrapper>;
  const recentList = [...recentListInfoMap].map((info) => {
    const { name, date } = info[1];

    return (
      <S.RecentItemWrapper key={createRandomKey()}>
        <S.RecentItemInfo onClick={() => clickHandler(name)}>
          <S.RecentItemName>
            <Icon iconName='Clock' />
            <div>{name}</div>
          </S.RecentItemName>
          <S.RecentItemDate>{date}</S.RecentItemDate>
        </S.RecentItemInfo>
        <S.RecentDeleteBtn onClick={() => handleClickDeleteBtn({ name })}>
          <Icon iconName='DeleteCircle' />
        </S.RecentDeleteBtn>
      </S.RecentItemWrapper>
    );
  });

  return (
    <S.RecentWrapper>
      <S.RecentHeader>
        {RECENT_KEYWORD}
        <S.RecentDeleteAllBtn onClick={() => handleClickDeleteBtn({})}>
          {DELETE_ALL}
        </S.RecentDeleteAllBtn>
      </S.RecentHeader>
      <S.RecentListWrapper>
        {recentListInfoMap.size ? recentList : noRecentList}
      </S.RecentListWrapper>
    </S.RecentWrapper>
  );
};

export default SearchRecent;
