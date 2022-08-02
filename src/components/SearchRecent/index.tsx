import { useRecoilState } from 'recoil';
import { v4 as createRandomKey } from 'uuid';

import * as S from '@components/SearchRecent/SearchRecent.style';
import { noRecentListMention } from '@constants/mentions';
import { RECENT_KEYWORD, DELETE_ALL } from '@constants/words';
import { searchRecent } from '@store/localStorage';
import { setLocalStorageInfo, SEARCH_RECENT_KEY } from '@utils/useLocalStorage';

const SearchRecent = () => {
  // 배열 내에 잘못된 값이 들어오는 경우에 대한 추가 처리 필요
  const [recentListInfoMap, setRecentListInfoMap] = useRecoilState(searchRecent);

  const handleClickDeleteBtn = ({ name }: { name?: string }) => {
    setRecentListInfoMap((prevMap) => {
      const newMap = new Map([...prevMap]);
      if (name) newMap.delete(name);
      if (!name) newMap.clear();
      setLocalStorageInfo({ key: SEARCH_RECENT_KEY, info: [...newMap] });
      return newMap;
    });
  };

  const noRecentList = <S.NoRecentListWrapper>{noRecentListMention}</S.NoRecentListWrapper>;
  const recentList = [...recentListInfoMap].map((info) => {
    const { name, date } = info[1];

    return (
      <S.RecentItemWrapper key={createRandomKey()}>
        <S.RecentItemInfo>
          <div>{`🔎 ${name}`}</div>
          <div>{date}</div>
        </S.RecentItemInfo>
        <S.RecentDeleteBtn onClick={() => handleClickDeleteBtn({ name })}>X</S.RecentDeleteBtn>
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
