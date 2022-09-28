import { useRecoilValue } from 'recoil';

import * as S from '@components/MapArea/MapArea.style';
import PreviewShareListBigSizeImage from '@components/PreviewShareListBigSizeImage';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import Icon from '@components/common/Icon';
import { activeShareList } from '@store/filterShareList';
import { curHightAtom } from '@store/shareMap';
import { ShareListType } from '@type/shareList';
import { getSortData } from '@utils/ShareListSort';

interface ShareListSlidePropsType {
  isClicked: boolean;
  maxHeight: number;
  contents: ShareListType[];
  changeClickTrue: () => void;
  changeClickFalse: () => void;
}

const ListContentComponentInfo = {
  delivery: PreviewShareListBigSizeImage,
  ingredient: PreviewShareListLeftImage,
};

const ShareListSlide = ({
  isClicked,
  maxHeight,
  contents,
  changeClickTrue,
  changeClickFalse,
}: ShareListSlidePropsType) => {
  const curHeight = useRecoilValue(curHightAtom);
  const activeShareListValue = useRecoilValue(activeShareList);
  const ListContentComponent = ListContentComponentInfo[activeShareListValue];
  return (
    <S.ShareListContainer
      onMouseDown={changeClickTrue}
      onMouseUp={changeClickFalse}
      onTouchStart={changeClickTrue}
      onTouchEnd={changeClickFalse}
      curHeight={curHeight}
      maxHeight={maxHeight}
    >
      <S.IconContainer>
        {isClicked ? (
          <Icon iconName='OnClickBar' iconSize={2.5} />
        ) : (
          <Icon iconName='OffClickBar' iconSize={2.5} />
        )}
      </S.IconContainer>
      <S.Title>주변 쉐어 목록</S.Title>
      <S.ListContent>
        <ListContentComponent data={getSortData('recency', contents)} />
      </S.ListContent>
    </S.ShareListContainer>
  );
};

export default ShareListSlide;
