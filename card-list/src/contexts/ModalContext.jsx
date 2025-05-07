
import { createContext, useContext, useState } from "react";
// createContext: 전역 상태를 만들 때 사용
// useContext: 어디서든 그 상태를 꺼내 쓰게 해줌
// useState: 상태를 만들고 바꾸는 기본 Hook

const ModalContext = createContext();
// ModalContext라는 이름으로 컨텍스트 객체를 생성해. 모달 상태를 담을 그릇(공용 공간)


// ModalProvider는 모달을 감싸는 상위 컴포넌트
// children은 이 컴포넌트 안에 들어있는 컴포넌트들을 의미해.
export function ModalProvider({ children }) {
  const [modalData, setModalData] = useState(null);
  // 모달에 들어갈 정보를 담는 상태 변수
  // 예: modalData = { type: "confirm", props: { message: "확인?" } }


  // 모달 열기 함수
  // type은 모달 종류 (예: “confirm”, “alert”)
  // props는 모달에 전달할 데이터들 (예: 메시지, onConfirm 등)
  const openModal = (type, props) => {
    setModalData({ type, props });
  };


  // 모달 닫기 함수
  // 상태를 null로 만들어서 모달이 화면에서 사라지게 해.
  const closeModal = () => {
    setModalData(null);
  };

  // ModalContext.Provider를 통해 하위 컴포넌트들이 모달 상태와 함수들을 사용할 수 있게 공유해주는 부분이야.
  return (
    <ModalContext.Provider value={{ modalData, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}


// 커스텀 훅 : 다른 컴포넌트에서 useModalContext() 라고 쓰면 위에서 만든 modalData, openModal, closeModal을 꺼내 쓸 수 있어!
export function useModalContext() {
  return useContext(ModalContext);
}