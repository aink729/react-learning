import "./ConfirmModal.css"; 

export default function ConfirmModal({message, onConfirm, onCancel}) {
    return (
        <div className="modal-backdrop">
            <div className="modal-box">
                <p>{message}</p>
                <div className="modal-button">
                    <button className="confirm" onClick={onConfirm}>확인</button>
                    <button className="cancel" onClick={onCancel}>취소</button>
                </div>
            </div>
        </div>
    )
}