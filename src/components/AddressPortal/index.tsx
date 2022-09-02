import { useRef } from 'react';

import AddressModal from '@components/AddressModal';
import * as S from '@components/AddressPortal/AddressPortal.style';
import Portal from '@components/Portal';
import Icon from '@components/common/Icon';
import useModal from '@hooks/useModal';

const AddressPortal = () => {
  const closeBtn = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isAddressModalOpen, setIsAddressModalOpen] = useModal({ modalRef });

  const openAddressModal = () => setIsAddressModalOpen(true);
  const closeAddressModal = () => setIsAddressModalOpen(false);

  return (
    <Portal type='full' portalName='address' closeBtn={closeBtn}>
      <S.Wrapper>
        <S.Header>
          <S.CloseBtn ref={closeBtn} isAddressModalOpen={isAddressModalOpen}>
            <Icon iconName={!isAddressModalOpen ? 'X_Icon' : 'Back'} />
          </S.CloseBtn>
          <S.HeaderTitle>주소설정</S.HeaderTitle>
        </S.Header>
        <S.AddressButton onClick={() => openAddressModal()} />
        {isAddressModalOpen && (
          <AddressModal modalRef={modalRef} closeAddressModal={closeAddressModal} />
        )}
        <div>3</div>
      </S.Wrapper>
    </Portal>
  );
};

export default AddressPortal;
