import { useRef, useState, MouseEvent } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import { deleteKeywordAddress } from '@api/keyword';
import * as S from '@components/KeywordBox/KeywordBox.style';
import KeywordTable from '@components/KeywordBox/KeywordTable';
import KeywordTableHeader from '@components/KeywordBox/KeywordTableHeader';
import Loading from '@components/Loading';
import SelectModal from '@components/common/SelectModal';
import { addressKeywordQuestionMention, unexpectedErrorOccursMention } from '@constants/mentions';
import { pathName } from '@constants/pathName';
import { DELETE } from '@constants/words';
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
  const openModal = (e: MouseEvent) => {
    e.stopPropagation();
    setIsDeleteModal(true);
  };

  const deleteHandler = async (parameter: string) => {
    if (!parameter) return false;
    const isSuccessFetch = await deleteKeywordAddress(parameter);

    if (isSuccessFetch) {
      closeModal();
      setKeywordListTrigger((prev) => prev + 1);
    }
  };

  const keywordTableClickHandler = (location: string) =>
    navigate(pathName.addKeyword, {
      state: { regionName: location },
    });

  switch (state) {
    case 'hasValue':
      const { isSuccess, data } = contents;
      if (!isSuccess || !data) {
        return <S.ErrorWrapper>{unexpectedErrorOccursMention}</S.ErrorWrapper>;
      } else {
        return (
          <S.Table>
            {data.map(({ location, keywords }: keywordDataType) => (
              <S.TableBox
                key={location}
                onClick={() => {
                  keywordTableClickHandler(location);
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
              <SelectModal
                modalRef={modalRef}
                closeModal={closeModal}
                onClickOkButton={() => deleteHandler(clickedLocation)}
                answeringMention={addressKeywordQuestionMention}
                okMention={DELETE}
              />
            )}
          </S.Table>
        );
      }
    case 'loading':
      return <Loading color='grey4' size={40} border={5} />;
    case 'hasError':
      return <S.ErrorWrapper>{contents.data}</S.ErrorWrapper>;
  }
};

export default KeywordBox;
