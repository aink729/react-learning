import { useEffect, useRef } from "react";
import ReactDOM from "react-dom"; // React 요소(컴포넌트)를 실제 브라우저 DOM에 그려주는 도구
import "./ConfirmModal.css"; 

export default function ConfirmModal({message, onConfirm, onCancel}) {

    const confirmButtonRef = useRef(null); // ✅ 버튼 DOM 참조용 ref

    useEffect(() => {
        // 모달이 뜨면 "확인" 버튼에 포커스 주기
        if (confirmButtonRef.current) {
            confirmButtonRef.current.focus();
        }
    }, []);

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
        <div className="modal-backdrop">
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
        </div>,
        document.getElementById("modal-root") // ✅ 여기로 강제 렌더링
    )
}