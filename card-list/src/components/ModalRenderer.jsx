import ConfirmModal from "./ConfirmModal";
import AlertModal from "./AlertModal";
import { useModalContext } from "../contexts/ModalContext";

export default function ModalRenderer() {
  const { modalData, closeModal } = useModalContext();

  if (!modalData) return null;

  const { type, props } = modalData;

  switch (type) {
    case "confirm":
      return (
        <ConfirmModal
          {...props}
          onCancel={closeModal}
          onConfirm={() => {
            props.onConfirm?.();
            closeModal();
          }}
        />
      );
    case "alert":
      return <AlertModal {...props} onClose={closeModal} />;
    default:
      return null;
  }
}
