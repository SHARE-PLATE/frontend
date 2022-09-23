import { useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import * as S from '@components/ShareFormButton/ShareFormButton.style';
import Icon from '@components/common/Icon';
import Modal from '@components/common/Modal';
import { pathName } from '@constants/pathName';
import useCheckPathname from '@hooks/useCheckPathname';
import useModal from '@hooks/useModal';

const ShareFormButton = () => {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useModal({ modalRef });
  const isShareFormOrProfile = useCheckPathname({ targetPaths: ['shareForm', 'profile'] });
  const showMenuBar = () => setIsModalOpen(!isModalOpen);

  return (
    <Modal isFull={isModalOpen} type='underRight'>
      <S.Wrapper onClick={showMenuBar} isShareFormOrProfile={isShareFormOrProfile}>
        {isModalOpen ? (
          <>
            <Icon iconName='FormClose' iconSize={3.5} />
            <S.ButtonContainer ref={modalRef}>
              <S.ButtonWrapper
                onClick={() => {
                  navigate(pathName.shareFormDelivery);
                }}
              >
                <Icon iconName='AddDelivery' iconSize={1.35} />
                <span>배달쉐어 모집</span>
              </S.ButtonWrapper>
              <S.ButtonWrapper onClick={() => navigate(pathName.shareFormIngredient)}>
                <Icon iconName='AddIngredient' iconSize={1.35} />
                <span>재료쉐어 모집</span>
              </S.ButtonWrapper>
            </S.ButtonContainer>
          </>
        ) : (
          <Icon
            iconName='Form'
            iconSize={3.5}
            color='orange5'
            opacity={1}
            additionalStyle={S.FormButtonAdditionalStyle}
          />
        )}
      </S.Wrapper>
    </Modal>
  );
};

export default ShareFormButton;
