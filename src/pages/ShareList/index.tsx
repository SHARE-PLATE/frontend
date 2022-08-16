import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';

import CategoryButton from '@components/CategoryButton';
import PreviewShareListBigSizeImage from '@components/PreviewShareListBigSizeImage';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import ShareListHeader from '@components/ShareListHeader';
import Tabs from '@components/Tabs';
import * as S from '@pages/ShareList/ShareList.style';
import { activeShareList, currentFilterShareList } from '@store/filterShareList';
import { getShareListsData } from '@store/shareList';
import { getSortData } from '@utils/ShareListSort';

const ShareList = () => {
  const curShareFilterList = useRecoilValue(currentFilterShareList);
  const [activeShareListValue, setActiveShareListValue] = useRecoilState(activeShareList);

  const data = useRecoilValueLoadable(getShareListsData);
  switch (data.state) {
    case 'hasValue':
      return (
        <S.Wrapper>
          <S.ListHeader>
            <ShareListHeader />
            <Tabs
              activeShareListValue={activeShareListValue}
              setActiveShareListValue={setActiveShareListValue}
            />
            <CategoryButton />
          </S.ListHeader>
          {activeShareListValue.delivery ? (
            <S.ListContents>
              <PreviewShareListBigSizeImage data={getSortData(curShareFilterList, data.contents)} />
            </S.ListContents>
          ) : activeShareListValue.ingredient ? (
            <S.ListContents>
              <PreviewShareListLeftImage data={getSortData(curShareFilterList, data.contents)} />
            </S.ListContents>
          ) : (
            ''
          )}
        </S.Wrapper>
      );
    case 'loading':
      return <div>로딩 페이지</div>;
    case 'hasError':
      return <div>에러 페이지</div>;
  }
};

export default ShareList;
