import { useRecoilState, useRecoilValueLoadable } from 'recoil';

import CategoryButton from '@components/CategoryButton';
import MainHeader from '@components/MainHeader';
import PreviewShareListBigSizeImage from '@components/PreviewShareListBigSizeImage';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import Tabs from '@components/Tabs';
import { shareListCategoryItem } from '@constants/category';
import useShareListTabsInfo from '@hooks/useShareListTabsInfo';
import * as S from '@pages/ShareList/ShareList.style';
import { activeShareList, currentFilterShareList } from '@store/filterShareList';
import { getShareListsData } from '@store/shareList';
import { getSortData } from '@utils/ShareListSort';

const ListContentComponentInfo = {
  delivery: PreviewShareListBigSizeImage,
  ingredient: PreviewShareListLeftImage,
};

const ShareList = () => {
  const [activeShareListValue, setActiveShareListValue] = useRecoilState(activeShareList);
  const [curShareFilterList, setCurrentFilterShareList] = useRecoilState(currentFilterShareList);
  const shareListTabsInfo = useShareListTabsInfo();
  const { state, contents } = useRecoilValueLoadable(getShareListsData);
  const ListContentComponent = ListContentComponentInfo[activeShareListValue];

  const getListContents = (state: string) => {
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
      <S.ListHeader>
        <ShareListHeader />
        <Tabs tabsInfo={shareListTabsInfo} setTab={setActiveShareListValue} />
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
