import { RefObject } from 'react';

import axios from 'axios';
import DaumPostcode, { Address } from 'react-daum-postcode';
import { useRecoilState } from 'recoil';

import * as S from '@components/AddressModal/AddressModal.style';
import Modal from '@components/common/Modal';
import { currentLocation } from '@store/location';

interface AddressModalPropsTypes {
  modalRef: RefObject<HTMLDivElement>;
  closeAddressModal: () => void;
}

const addressModalPosition = {
  top: `${3.25 + 3.37}rem`, // 3.25 + 3.37
};

const AddressModal = ({ modalRef, closeAddressModal }: AddressModalPropsTypes) => {
  const [curLocation, setCurLocation] = useRecoilState(currentLocation);

  const handlePostCode = async (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = '';

    const response = await axios.get('https://dapi.kakao.com/v2/local/search/address.json', {
      params: { query: fullAddress },
      headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}` },
    });
    const info = response.data.documents[0];

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setCurLocation((prev) => fullAddress);
  };

  return (
    <Modal position={addressModalPosition} isFull={true}>
      <DaumPostcode style={S.PostCodeStyle} onComplete={handlePostCode} />
    </Modal>
  );
};

export default AddressModal;
