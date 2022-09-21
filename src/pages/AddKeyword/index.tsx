import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { addKeywords } from '@api/keyword';
import KeywordInput from '@components/KeywordInput';
import RegisteredKeyword from '@components/RegisteredKeyword';
import BackTitleHeader from '@components/common/BackTitleHeader';
import { ADD_NOTICE_KEYWORD } from '@constants/words';
import useInput from '@hooks/useInput';
import * as S from '@pages/AddKeyword/AddKeyword.style';
import { keywordListTrigger } from '@store/keyword';

interface StateType {
  regionName: string;
  x: string;
  y: string;
}

const AddKeyword = () => {
  const {
    state: { regionName, x, y },
  } = useLocation() as {
    state: StateType;
  };

  const setKeywordListTrigger = useSetRecoilState(keywordListTrigger);
  const navigate = useNavigate();
  const keywordInputBar = useInput('');

  const handleSubmitClick = async () => {
    if (!keywordInputBar.inputValue) return false;

    const newKeyword = {
      location: regionName,
      latitude: y,
      longitude: x,
      keyword: keywordInputBar.inputValue,
    };

    const isSuccessFetch = await addKeywords(newKeyword);

    if (isSuccessFetch) {
      setKeywordListTrigger((prev) => prev + 1);
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
      <S.RegisteredKeywordWrapper>
        <RegisteredKeyword regionName={regionName} />
      </S.RegisteredKeywordWrapper>
    </S.Wrapper>
  );
};

export default AddKeyword;
