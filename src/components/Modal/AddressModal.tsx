import { RefObject } from 'react';

interface AddressModalPropsTypes {
  modalRef: RefObject<HTMLDivElement>;
}

const AddressModal = ({ modalRef }: AddressModalPropsTypes) => {
  return <div>모달 등장</div>;
};

export default AddressModal;
