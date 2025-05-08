import { createContext, useContext, useState, useRef } from "react";
// createContext: 전역 상태를 만들 때 사용
// useContext: 어디서든 그 상태를 꺼내 쓰게 해줌
// useState: 상태를 만들고 바꾸는 기본 Hook

const ModalContext = createContext();
// ModalContext라는 이름으로 컨텍스트 객체를 생성해. 모달 상태를 담을 그릇(공용 공간)
// 이걸로 “누가 모달 열라고 했는지”, “지금 어떤 모달이 열렸는지”를 전역에서 다룰 수 있어.


// ModalProvider는 모달을 감싸는 상위 컴포넌트
// children은 이 컴포넌트 안에 들어있는 컴포넌트들을 의미해.
export function ModalProvider({ children }) {
  const [modalData, setModalData] = useState(null);
  // 모달에 들어갈 정보를 담는 상태 변수
  // 예: modalData = { type: "confirm", props: { message: "확인?" } }
  const [resolver, setResolver] = useState(null);
  // resolver는 나중에 호출될 함수 (resolve)를 저장하는 공간. resolver() 약속을 완료하는 함수
  // resolve()를 호출하면 await에서 기다리던 곳에 값을 전달


  // 모달 열기 함수
  // type은 모달 종류 (예: “confirm”, “alert”)
  // props는 모달에 전달할 데이터들 (예: 메시지, onConfirm 등)
  const openModal = (type, props) => {
    setModalData({ type, props });
  };

  const openModalAsync = (type, props = {}) => {
    return new Promise((resolve) => { // 확인/취소 눌릴 때까지 기다리는 약속 생성
      // ... 무언가 비동기 작업 수행
      setModalData({ type, props }); // 모달 열기
      setResolver(() => resolve); // 이걸 실행하면 Promise가 끝나고 결과가 반환됨. 나중에 결과 줄 수 있도록 resolver 저장
    });
  };


  // 모달 닫기 함수
  // 상태를 null로 만들어서 모달이 화면에서 사라지게 해.
  const closeModal = () => {
    setModalData(null);
    if (resolver) resolver(false);
    setResolver(null);
  };
  const confirmModal = (result) => {
    if (resolver) resolver(result);
    setModalData(null);
    setResolver(null);
  };

  // ModalContext.Provider를 통해 하위 컴포넌트들이 모달 상태와 함수들을 사용할 수 있게 공유해주는 부분이야.
  //이 Provider가 실제로 Context를 앱 전체에 제공해주는 부분이야. 

  return (
    <ModalContext.Provider
      value={{ modalData, openModal, openModalAsync, closeModal, confirmModal }}
    >
      {children}
    </ModalContext.Provider>
  );

}


// 커스텀 훅 : 다른 컴포넌트에서 useModalContext() 라고 쓰면 위에서 만든 modalData, openModal, closeModal을 꺼내 쓸 수 있어!
// 다른 파일에서 쉽게 모달 관련 상태를 꺼내 쓰게 도와주는 전용 훅이야.

export function useModalContext() {
  return useContext(ModalContext);
}