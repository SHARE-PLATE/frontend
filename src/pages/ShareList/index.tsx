import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';

import CategoryButton from '@components/CategoryButton';
import Loading from '@components/Loading';
import MainHeader from '@components/MainHeader';
import PreviewShareListBigSizeImage from '@components/PreviewShareListBigSizeImage';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import Tabs from '@components/Tabs';
import { shareListCategoryItem } from '@constants/category';
import { ERROR_GET_SHARE_INFO } from '@constants/mentions';
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

  const getListContents = () => {
    switch (state) {
      case 'hasValue':
        const { isSuccess, data } = contents;
        if (!isSuccess || !data) {
          return <S.ErrorWrapper>{ERROR_GET_SHARE_INFO}</S.ErrorWrapper>;
        } else {
          return (
            <S.ListContent>
              <ListContentComponent data={getSortData(curShareFilterList, data)} />
            </S.ListContent>
          );
        }
      case 'loading':
        return <Loading color='grey4' size={42} border={6} height='100vh' />;
      case 'hasError':
        return <S.ErrorWrapper>{ERROR_GET_SHARE_INFO}</S.ErrorWrapper>;
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
      {getListContents()}
    </S.Wrapper>
  );
};

export default ShareList;
