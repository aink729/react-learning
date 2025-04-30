import { useState, useCallback } from 'react'; 
//`useState`: 모달이 열렸는지(true) 닫혔는지(false) 상태를 관리할 Hook
// `useCallback`: 함수가 불필요하게 다시 만들어지지 않도록 메모이징
// 훅의 이름은 항상 use로 시작해야 React가 Hook으로 인식함

export default function useModal(initial = false) {
  const [isOpen, setIsOpen] = useState(initial);

    // `isOpen`: 모달이 열려 있으면 `true`, 아니면 `false`
    // `setIsOpen()`: 모달 상태를 변경하는 함수
    // 초기값은 인자로 받은 `initial`

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  // useCallback()은 이 함수가 매번 다시 생성되지 않도록 캐싱함


  return {
    isOpen,
    openModal,
    closeModal,
  };
}