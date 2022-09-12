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
              <S.DeliveryButton
                onClick={() => {
                  navigate(pathName.shareFormDelivery);
                }}
              >
                <Icon iconName='AddDelivery' iconSize='LARGE' />
                <span>배달쉐어</span>
              </S.DeliveryButton>
              <S.IngredientButton onClick={() => navigate(pathName.shareFormIngredient)}>
                <Icon iconName='AddIngredient' iconSize='LARGE' />
                <span>재료쉐어</span>
              </S.IngredientButton>
            </S.ButtonContainer>
          </>
        ) : (
          <Icon iconName='Form' iconSize={3.5} />
        )}
      </S.Wrapper>
    </Modal>
  );
};

export default ShareFormButton;
