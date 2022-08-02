import { v4 as createRandomKey } from 'uuid';

import * as S from '@components/SearchRecent/SearchRecent.style';
import { noRecentListMention } from '@constants/mentions';
import { getLocalStorageInfo, SEARCH_RECENT_KEY } from '@utils/useLocalStorage';

type recentListInfoType = [string, { name: string; date: string }][];

const SearchRecent = () => {
  const recentListInfo: recentListInfoType = getLocalStorageInfo(SEARCH_RECENT_KEY);

  const noRecentList = <S.NoRecentListWrapper>{noRecentListMention}</S.NoRecentListWrapper>;
  const recentList = recentListInfo.map((info) => {
    const { name, date } = info[1];

    return (
      <S.RecentItemWrapper key={createRandomKey()}>
        <S.RecentItemInfo>
          <div>{`🔎 ${name}`}</div>
          <div>{date}</div>
        </S.RecentItemInfo>
        <S.RecentDeleteBtn>X</S.RecentDeleteBtn>
      </S.RecentItemWrapper>
    );
  });

  return (
    <S.RecentWrapper>
      <S.RecentHeader>
        최근 검색어<S.RecentDeleteAllBtn>전체 삭제</S.RecentDeleteAllBtn>
      </S.RecentHeader>
      <S.RecentListWrapper>{recentListInfo ? recentList : noRecentList}</S.RecentListWrapper>
    </S.RecentWrapper>
  );
};

export default SearchRecent;
