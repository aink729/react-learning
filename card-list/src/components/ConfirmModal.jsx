import { useEffect } from "react";
import ReactDOM from "react-dom"; // React 요소(컴포넌트)를 실제 브라우저 DOM에 그려주는 도구
import "./ConfirmModal.css"; 

export default function ConfirmModal({message, onConfirm, onCancel}) {


    // 🔥 useEffect 안에서 keydown 이벤트 등록
    useEffect(() => { // 而댄룷�뚰듃媛� �뚮뜑留곷맂 �ㅼ뿉 �ㅽ뻾��

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onCancel(); // ESC 누르면 모달 닫기
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        // 👇 컴포넌트가 사라질 때 이벤트 제거 (메모리 누수 방지!)
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onCancel]);
    

    // ReactDOM.createPortal(ReactElement, DOM마운트위치)
    // 컴포넌트는 현재 위치에 있어도, 렌더링은 DOM의 다른 곳으로
    return ReactDOM.createPortal( 
        <div className="modal-backdrop">
            <div className="modal-box">
                <p>{message}</p>
                <div className="modal-button">
                    <button className="confirm" onClick={onConfirm}>확인</button>
                    <button className="cancel" onClick={onCancel}>취소</button>
                </div>
            </div>
        </div>,
        document.getElementById("modal-root") // ✅ 여기로 강제 렌더링
    )
}