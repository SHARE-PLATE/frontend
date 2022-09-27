import { useRef, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { addKeywords } from '@api/keyword';
import KeywordInput from '@components/KeywordInput';
import RegisteredKeyword from '@components/RegisteredKeyword';
import BackTitleHeader from '@components/common/BackTitleHeader';
import FailedModal from '@components/common/FailedModal';
import { inputValueFailed, keywordLengthFailed } from '@constants/mentions';
import { ADD_NOTICE_KEYWORD } from '@constants/words';
import useInput from '@hooks/useInput';
import useModal from '@hooks/useModal';
import * as S from '@pages/AddKeyword/AddKeyword.style';
import { keywordListTrigger, registeredKeywordTrigger } from '@store/keyword';

const AddKeyword = () => {
  const {
    state: { regionName },
  } = useLocation() as {
    state: { regionName: string };
  };

  const navigate = useNavigate();
  const [keywordLength, setKeywordLength] = useState<number>(0);
  const [curLatitudeLongitude, setCurLatitudeLongitude] = useState<{ lat: string; lng: string }>({
    lat: '',
    lng: '',
  });

  const setKeywordListTrigger = useSetRecoilState(keywordListTrigger);
  const setRegisteredKeywordTrigger = useSetRecoilState(registeredKeywordTrigger);

  const modalRef = useRef<HTMLDivElement>(null);
  const [isInputValueModalOpen, setIsInputValueModalOpen] = useModal({ modalRef });
  const [isKeywordLengthModalOpen, setIsKeywordLengthModalOpen] = useModal({ modalRef });

  const closeInputValueModal = () => setIsInputValueModalOpen(false);
  const closeKeywordLengthModal = () => setIsKeywordLengthModalOpen(false);

  const keywordInputBar = useInput('');

  const handleSubmitClick = async () => {
    if (!keywordInputBar.inputValue) {
      setIsInputValueModalOpen(true);
      return false;
    }
    if (keywordLength >= 10) {
      setIsKeywordLengthModalOpen(true);
      return false;
    }

    const newKeyword = {
      location: regionName,
      latitude: curLatitudeLongitude.lat,
      longitude: curLatitudeLongitude.lng,
      keyword: keywordInputBar.inputValue,
    };

    const isSuccessFetch = await addKeywords(newKeyword);

    if (isSuccessFetch) {
      setKeywordListTrigger((prev) => prev + 1);
      setRegisteredKeywordTrigger((prev) => prev + 1);
      navigate('/profile/keyword');
    }
  };

  return (
    <S.Wrapper>
      <BackTitleHeader title={ADD_NOTICE_KEYWORD} />
      <S.Header>
        <span>{regionName}</span>
      </S.Header>
      <KeywordInput {...{ keywordInputBar }} handleSubmitClick={handleSubmitClick} />
      <RegisteredKeyword
        regionName={regionName}
        setKeywordLength={setKeywordLength}
        setCurLatitudeLongitude={setCurLatitudeLongitude}
      />
      {isInputValueModalOpen && (
        <FailedModal
          modalRef={modalRef}
          closeModal={closeInputValueModal}
          text={inputValueFailed}
        />
      )}
      {isKeywordLengthModalOpen && (
        <FailedModal
          modalRef={modalRef}
          closeModal={closeKeywordLengthModal}
          text={keywordLengthFailed}
        />
      )}
    </S.Wrapper>
  );
};

export default AddKeyword;
