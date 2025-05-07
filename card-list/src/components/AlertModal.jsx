import ReactDOM from "react-dom";
 import "./AlertModal.css";

export default function AlertModal({ message, onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop show">
      <div className="modal-box">
        <p>{message}</p>
        <button onClick={onClose}>확인</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}