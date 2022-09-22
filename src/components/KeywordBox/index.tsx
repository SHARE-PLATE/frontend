import { useRef, useState, MouseEvent } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import { deleteKeywordAddress } from '@api/keyword';
import * as S from '@components/KeywordBox/KeywordBox.style';
import KeywordTable from '@components/KeywordBox/KeywordTable';
import KeywordTableHeader from '@components/KeywordBox/KeywordTableHeader';
import KeywordDeleteModal from '@components/KeywordDeleteModal';
import { pathName } from '@constants/pathName';
import useModal from '@hooks/useModal';
import { getKeywordListsData, keywordListTrigger } from '@store/keyword';
import { keywordDataType } from '@type/keyword';

const KeywordBox = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [isDeleteModal, setIsDeleteModal] = useModal({ modalRef });
  const [clickedLocation, setClickedLocation] = useState<string>('');
  const { state, contents } = useRecoilValueLoadable(getKeywordListsData);
  const setKeywordListTrigger = useSetRecoilState(keywordListTrigger);

  const closeModal = () => setIsDeleteModal(false);
  const openModal = () => setIsDeleteModal(true);

  const deleteHandler = async (curLocation: string) => {
    if (!curLocation) return false;
    const isSuccessFetch = await deleteKeywordAddress(curLocation);

    if (isSuccessFetch) {
      closeModal();
      setKeywordListTrigger((prev) => prev + 1);
    }
  };

  const keywordTableClickHandler = ({ target: { tagName } }: any, location: string) => {
    if (tagName === 'svg' || tagName === 'path') return;

    navigate(pathName.addKeyword, {
      state: { regionName: location },
    });
  };

  switch (state) {
    case 'hasValue':
      return (
        <S.Table>
          {contents.map(({ location, keywords }: keywordDataType) => (
            <S.TableBox
              key={location}
              onClick={(e) => {
                keywordTableClickHandler(e, location);
              }}
            >
              <KeywordTableHeader
                location={location}
                openModal={openModal}
                setClickedLocation={setClickedLocation}
              />
              <KeywordTable keywords={keywords} />
            </S.TableBox>
          ))}
          {isDeleteModal && (
            <KeywordDeleteModal
              modalRef={modalRef}
              deleteHandler={deleteHandler}
              closeAModal={closeModal}
              clickedLocation={clickedLocation}
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
