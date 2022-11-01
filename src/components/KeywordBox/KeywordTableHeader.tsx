import { MouseEvent } from 'react';

import { useSetRecoilState } from 'recoil';

import { deleteKeywordAddress } from '@api/keyword';
import * as S from '@components/KeywordBox/KeywordBox.style';
import Icon from '@components/common/Icon';
import { addressKeywordQuestionMention } from '@constants/mentions';
import { DELETE } from '@constants/words';
import { keywordListTrigger } from '@store/keyword';
import { selectModalInfoState } from '@store/modal';

interface KeywordTableHeaderPropsType {
  location: string;
}

const KeywordTableHeader = ({ location }: KeywordTableHeaderPropsType) => {
  const setSelectModalInfo = useSetRecoilState(selectModalInfoState);
  const setKeywordListTrigger = useSetRecoilState(keywordListTrigger);

  const onClickDeleteKeywordButton = async () => {
    const isSuccessFetch = await deleteKeywordAddress(location);

    if (isSuccessFetch) {
      setKeywordListTrigger((prev) => prev + 1);
    }
  };

  const handleClickDeleteIcon = (event: MouseEvent) => {
    event.stopPropagation();

    setSelectModalInfo(({ trigger }) => ({
      trigger: trigger + 1,
      onClickOkButton: onClickDeleteKeywordButton,
      okMention: DELETE,
      answeringMention: addressKeywordQuestionMention,
    }));
  };

  return (
    <S.Header>
      <S.Title>{location}</S.Title>
      <Icon iconName='DeleteCircle' handleClick={handleClickDeleteIcon} />
    </S.Header>
  );
};

export default KeywordTableHeader;
