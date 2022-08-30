import { useRecoilState, useRecoilValueLoadable } from 'recoil';

import CategoryButton from '@components/CategoryButton';
import PreviewShareListBigSizeImage from '@components/PreviewShareListBigSizeImage';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import ShareListHeader from '@components/ShareListHeader';
import Tabs from '@components/Tabs';
import { shareListCategoryItem } from '@constants/category';
import * as S from '@pages/ShareList/ShareList.style';
import { activeShareList, currentFilterShareList } from '@store/filterShareList';
import { getShareListsData } from '@store/shareList';
import { getSortData } from '@utils/ShareListSort';

const ShareList = () => {
  const [activeShareListValue, setActiveShareListValue] = useRecoilState(activeShareList);
  const [curShareFilterList, setCurrentFilterShareList] = useRecoilState(currentFilterShareList);

  const data = useRecoilValueLoadable(getShareListsData);

  const getListContents = (state: string) => {
    switch (state) {
      case 'hasValue':
        return (
          <S.ListContent>
            {activeShareListValue.delivery ? (
              <PreviewShareListBigSizeImage data={getSortData(curShareFilterList, data.contents)} />
            ) : activeShareListValue.ingredient ? (
              <PreviewShareListLeftImage data={getSortData(curShareFilterList, data.contents)} />
            ) : (
              ''
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
        <ShareListHeader />
        <Tabs
          activeShareListValue={activeShareListValue}
          setActiveShareListValue={setActiveShareListValue}
        />
        <CategoryButton
          categoryItem={shareListCategoryItem}
          setCurrentFilterList={setCurrentFilterShareList}
        />
      </S.ListHeader>
      {getListContents(data.state)}
    </S.Wrapper>
  );
};

export default ShareList;
