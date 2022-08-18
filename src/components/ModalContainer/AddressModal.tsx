import { RefObject } from 'react';

import DaumPostcode from 'react-daum-postcode';
import { useRecoilState } from 'recoil';

import * as S from '@components/ModalContainer/ModalContainer.style';
import Modal, { MODAL_POSITION } from '@components/common/Modal';
import { currentLocation } from '@store/location';

interface AddressModalPropsTypes {
  modalRef: RefObject<HTMLDivElement>;
  closeAddressModal: () => void;
}

const AddressModal = ({ modalRef, closeAddressModal }: AddressModalPropsTypes) => {
  const [curLocation, setCutLocation] = useRecoilState(currentLocation);

  const handlePostCode = (data: any) => {
    if (!data) return;
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setCutLocation((prev) => fullAddress);
  };

  return (
    <Modal position={MODAL_POSITION.CENTER} closeModal={closeAddressModal}>
      <S.Wrapper ref={modalRef}>
        <S.CurLocation>현재위치 : {curLocation ? curLocation : '강남역'}</S.CurLocation>
        <DaumPostcode style={S.PostCodeStyle} onComplete={handlePostCode} />
      </S.Wrapper>
    </Modal>
  );
};

export default AddressModal;
