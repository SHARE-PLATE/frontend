import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { addKeywords } from '@api/keyword';
import KeywordInput from '@components/KeywordInput';
import RegisteredKeyword from '@components/RegisteredKeyword';
import BackTitleHeader from '@components/common/BackTitleHeader';
import useInput from '@hooks/useInput';
import * as S from '@pages/AddKeyword/AddKeyword.style';
import { keywordListTrigger } from '@store/keyword';

interface StateType {
  place_name: string;
  regionName: string;
  x: string;
  y: string;
}

const AddKeyword = () => {
  const {
    state: { place_name, regionName, x, y },
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
      latitude: x,
      longitude: y,
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
      <BackTitleHeader title='알림 키워드 추가' />
      <S.Header>
        {regionName} <S.Subheader>({place_name})</S.Subheader>
      </S.Header>
      <KeywordInput {...{ keywordInputBar }} handleSubmitClick={handleSubmitClick} />
      <S.RegisteredKeywordWrapper>
        <RegisteredKeyword regionName={regionName} />
      </S.RegisteredKeywordWrapper>
      <div></div>
    </S.Wrapper>
  );
};

export default AddKeyword;
