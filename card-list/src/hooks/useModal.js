import { useState, useCallback } from 'react';

export default function useModal(initial = false) {
  const [isOpen, setIsOpen] = useState(initial);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    openModal,
    closeModal,
  };
}