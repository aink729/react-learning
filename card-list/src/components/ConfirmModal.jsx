import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom"; // React 요소(컴포넌트)를 실제 브라우저 DOM에 그려주는 도구
import FocusLock from 'react-focus-lock';
import "./ConfirmModal.css"; 

export default function ConfirmModal({message, onConfirm, onCancel}) {


    // -------------------- 🔒 Fade Ani 관련 --------------------
    const [isVisible, setIsVisible] = useState(false); // 💡 애니메이션용 상태

    // -------------------- 🔒 Focus 관련 --------------------
    const confirmButtonRef = useRef(null); // ✅ 버튼 DOM 참조용 ref
    //컴포넌트가 아직 “렌더링 되기 전”에는 ref가 연결될 DOM이 없으니까 일단 null로 초기화
    // DOM 참조용으로 쓸 땐 항상 null**을 넣는 게 표준

    useEffect(() => {
        // 모달이 뜨면 "확인" 버튼에 포커스 주기
        if (confirmButtonRef.current) {
            confirmButtonRef.current.focus();
        }
        // 💡 다음 프레임에 show 클래스 활성화
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10); // 최소 지연 시간
    
        return () => clearTimeout(timer);

    }, []);

    // -------------------- 🔒 Bg 관련 --------------------
    const backdropRef = useRef(null); // 🔹 배경을 감지할 ref. 모달 배경 요소를 직접 가리킴

    const handleBackdropClick = (e) => {
        // 클릭한 대상이 backdrop 자체일 때만 닫기 실행
        if (e.target === backdropRef.current) {
          onCancel();
        }
      };


    // -------------------- 🔒 Key Event 관련 --------------------
    // 🔥 useEffect 안에서 keydown 이벤트 등록
    useEffect(() => { // 컴포넌트가 렌더링된 다음에 실행

        // 이벤트 감지 함수 선언
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onCancel(); // ESC 누르면 모달 닫기
            }

            if (e.key === "Enter" ) {
            // if (e.key === "Enter" && !e.shiftKey) {
            // 인풋에 포커스 간 경우 무시하고 싶다면 if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
                onConfirm(); // ENTER 누르면 확인 버튼 클릭
            }
        };

        // 이벤트 등록
        document.addEventListener("keydown", handleKeyDown);

        // 👇 컴포넌트가 사라질 때 이벤트 제거 (메모리 누수 방지!)
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onCancel, onConfirm]); // 💡 의존성 배열. 함수가 바뀌면 다시 등록
    




    // ReactDOM.createPortal(ReactElement, DOM마운트위치)
    // 컴포넌트는 현재 위치에 있어도, 렌더링은 DOM의 다른 곳으로
    return ReactDOM.createPortal( 
        <div 
            className={`modal-backdrop ${isVisible ? "show" : ""}`}
            ref={backdropRef}
            onClick={handleBackdropClick} // 🔹 클릭 이벤트 연결
        >
        <FocusLock returnFocus> { /* FocusLock : 모달 내에서 포커스를 트랩하여 Tab 키를 눌러도 포커스가 모달 밖으로 나가지 않도록 함. returnFocus : 모달이 닫힐 때 이전에 포커스가 있던 요소로 포커스를 반환함.*/}
            <div className="modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-message">
                <p id="modal-message">{message}</p>
                <div className="modal-button">
                    <button
                        ref={confirmButtonRef} // ✅ ref 연결
                        className="confirm"
                        onClick={onConfirm}
                    >
                        확인
                    </button>
                    <button className="cancel" onClick={onCancel}>취소</button>
                </div>
            </div>
            </FocusLock>
        </div>,
        document.getElementById("modal-root") // ✅ 여기로 강제 렌더링
    )
}