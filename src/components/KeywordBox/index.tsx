import { useRef } from 'react';

import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import { deleteKeywordAddress } from '@api/keyword';
import * as S from '@components/KeywordBox/KeywordBox.style';
import KeywordTable from '@components/KeywordBox/KeywordTable';
import KeywordTableHeader from '@components/KeywordBox/KeywordTableHeader';
import KeywordDeleteModal from '@components/KeywordDeleteModal';
import useModal from '@hooks/useModal';
import { getKeywordListsData, keywordListTrigger } from '@store/keyword';
import { keywordDataType } from '@type/keyword';

const KeywordBox = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isDeleteModal, setIsDeleteModal] = useModal({ modalRef });
  const { state, contents } = useRecoilValueLoadable(getKeywordListsData);
  const setKeywordListTrigger = useSetRecoilState(keywordListTrigger);

  const closeModal = () => setIsDeleteModal(false);
  const openModal = () => setIsDeleteModal(true);

  const deleteHandler = async (curLocation: string) => {
    if (!curLocation) return false;

    const isSuccessFetch = await deleteKeywordAddress(curLocation);

    if (isSuccessFetch) {
      setKeywordListTrigger((prev) => prev + 1);
      closeModal();
    }
  };

  switch (state) {
    case 'hasValue':
      return (
        <S.Table>
          {contents.map(({ location, keywords }: keywordDataType) => (
            <S.TableBox key={location}>
              <KeywordTableHeader location={location} openModal={openModal} />
              <KeywordTable keywords={keywords} />
            </S.TableBox>
          ))}
          {isDeleteModal && (
            <KeywordDeleteModal
              modalRef={modalRef}
              deleteHandler={deleteHandler}
              closeAModal={closeModal}
            />
          )}
        </S.Table>
      );
    case 'loading':
      return <div>로딩 페이지</div>;
    case 'hasError':
      return <div>에러 페이지</div>;
  }
};

export default KeywordBox;
