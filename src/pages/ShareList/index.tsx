import { useRecoilState, useRecoilValueLoadable } from 'recoil';

import CategoryButton from '@components/CategoryButton';
import MainHeader from '@components/MainHeader';
import PreviewShareListBigSizeImage from '@components/PreviewShareListBigSizeImage';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import Tabs from '@components/Tabs';
import { shareListCategoryItem } from '@constants/category';
import * as S from '@pages/ShareList/ShareList.style';
import { activeShareList, currentFilterShareList } from '@store/filterShareList';
import { getShareListsData } from '@store/shareList';
import { getSortData } from '@utils/ShareListSort';

const ShareList = () => {
  const [activeShareListValue, setActiveShareListValue] = useRecoilState(activeShareList);
  const [curShareFilterList, setCurrentFilterShareList] = useRecoilState(currentFilterShareList);

  const { state, contents } = useRecoilValueLoadable(getShareListsData);

  const getListContents = (state: string) => {
    switch (state) {
      case 'hasValue':
        return (
          <S.ListContent>
            {activeShareListValue === 'delivery' ? (
              <PreviewShareListBigSizeImage data={getSortData(curShareFilterList, contents)} />
            ) : activeShareListValue === 'ingredient' ? (
              <PreviewShareListLeftImage data={getSortData(curShareFilterList, contents)} />
            ) : (
              '에러 메시지'
            )}
          </S.ListContent>
        );
      case 'loading':
        return <div>로딩 페이지</div>;
      case 'hasError':
        return <div>에러 페이지</div>;
    }
  };

  return (
    <S.Wrapper>
      <S.ListHeader>
        <MainHeader />
        <Tabs
          activeShareListValue={activeShareListValue}
          setActiveShareListValue={setActiveShareListValue}
        />
        <CategoryButton
          categoryItem={shareListCategoryItem}
          setCurrentFilterList={setCurrentFilterShareList}
        />
      </S.ListHeader>
      {getListContents(state)}
    </S.Wrapper>
  );
};

export default ShareList;
