import { useRecoilValue } from 'recoil';

import * as S from '@components/MapArea/MapArea.style';
import PreviewShareListBigSizeImage from '@components/PreviewShareListBigSizeImage';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import Icon from '@components/common/Icon';
import { activeShareList } from '@store/filterShareList';
import { curTopAtom } from '@store/shareMap';
import { ShareListType } from '@type/shareList';
import { getSortData } from '@utils/ShareListSort';

interface ShareListSlidePropsType {
  isClicked: boolean;
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
  contents,
  changeClickTrue,
  changeClickFalse,
}: ShareListSlidePropsType) => {
  const activeShareListValue = useRecoilValue(activeShareList);
  const ListContentComponent = ListContentComponentInfo[activeShareListValue];
  const curTop = useRecoilValue(curTopAtom);
  return (
    <S.ShareListContainer
      onMouseDown={changeClickTrue}
      onMouseUp={changeClickFalse}
      onTouchStart={changeClickTrue}
      onTouchEnd={changeClickFalse}
      curTop={curTop}
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
