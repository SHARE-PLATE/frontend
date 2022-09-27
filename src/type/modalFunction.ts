import { MouseEvent } from 'react';

interface isDeleteModalType {
  isDeleteModal: boolean;
}

export type CloseModal = ({ isDeleteModal }: isDeleteModalType) => void;

export type OpenModal = (e: MouseEvent, { isDeleteModal }: isDeleteModalType) => void;
