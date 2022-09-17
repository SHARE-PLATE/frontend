import { RecoilValueReadOnly, useRecoilValueLoadable } from 'recoil';

import { GetShareMineListDataType } from '@api/shareList';
import * as S from '@components/PreviewShareListCenterImage/PreviewShareListCenterImage.style';
import ShareListItemCenterImage from '@components/ShareListItemCenterImage';

import 'moment/locale/ko';

interface PreviewShareListCenterImagePropsType {
  valueState: RecoilValueReadOnly<GetShareMineListDataType[] | undefined>;
}

const PreviewShareListCenterImage = ({ valueState }: PreviewShareListCenterImagePropsType) => {
  const { state: entryState, contents: entryContentsData } = useRecoilValueLoadable(valueState);

  const contents = () => {
    switch (entryState) {
      case 'hasError':
        const errorMention = `목록을 불러오지 못했습니다.`;
        return <S.NoListContainer>{errorMention}</S.NoListContainer>;

      case 'hasValue':
        if (!entryContentsData || !entryContentsData.length) {
          const noListMention = `현재 쉐어하신\n목록이 없습니다.`;
          return <S.NoListContainer>{noListMention}</S.NoListContainer>;
        } else {
          const list = entryContentsData.map((data) => (
            <ShareListItemCenterImage key={data.id} {...data} />
          ));
          return list;
        }
    }
  };

  return <S.Wrapper>{contents()}</S.Wrapper>;
};

export default PreviewShareListCenterImage;
