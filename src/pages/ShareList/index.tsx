import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';

import CategoryButton from '@components/CategoryButton';
import MainHeader from '@components/MainHeader';
import PreviewShareListBigSizeImage from '@components/PreviewShareListBigSizeImage';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import Tabs from '@components/Tabs';
import { shareListCategoryItem } from '@constants/category';
import useIsTopState from '@hooks/useIsTopState';
import useShareListTabsInfo from '@hooks/useShareListTabsInfo';
import * as S from '@pages/ShareList/ShareList.style';
import {
  activeShareList,
  currentFilterShareList,
  activeShareListType,
} from '@store/filterShareList';
import { getShareListsData } from '@store/shareList';
import { getSortData } from '@utils/ShareListSort';

const ShareListContentComponentInfo = {
  delivery: PreviewShareListBigSizeImage,
  ingredient: PreviewShareListLeftImage,
};

const ShareList = () => {
  const [curShareFilterList, setCurrentFilterShareList] = useRecoilState(currentFilterShareList);
  const activeShareListValue = useRecoilValue(activeShareList);
  const shareListTabsInfo = useShareListTabsInfo();
  const isTop = useIsTopState();
  const ListContentComponent = ShareListContentComponentInfo[activeShareListValue];
  const { state, contents } = useRecoilValueLoadable(getShareListsData({}));

  const getListContents = (state: 'hasValue' | 'loading' | 'hasError') => {
    switch (state) {
      case 'hasValue':
        return (
          <S.ListContent>
            <ListContentComponent data={getSortData(curShareFilterList, contents)} />
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
      <S.ListHeader isTop={isTop}>
        <MainHeader />
        <S.TabsWrapper>
          <Tabs<activeShareListType> tabsInfo={shareListTabsInfo} targetAtom={activeShareList} />
        </S.TabsWrapper>
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
