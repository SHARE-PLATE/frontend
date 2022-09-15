import { useSetRecoilState } from 'recoil';

import * as S from '@components/AddKeyWordButton/AddKeyWordButton.style';
import Icon from '@components/common/Icon';
import Modal from '@components/common/Modal';
import { portalState } from '@store/portal';

const AddKeyWordButton = () => {
  const setPortal = useSetRecoilState(portalState);

  const ClickHandler = () => setPortal('keywordAddress');

  return (
    <Modal isFull={false} type='addKeyWord'>
      <>
        <S.Wrapper onClick={ClickHandler}>
          <Icon iconName='Plus' />
        </S.Wrapper>
        <S.SpeechBubbleContainer>
          <Icon iconName='AddKeyword' iconSize={8.375} />
        </S.SpeechBubbleContainer>
      </>
    </Modal>
  );
};

export default AddKeyWordButton;
