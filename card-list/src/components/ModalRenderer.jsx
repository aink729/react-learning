import ConfirmModal from "./ConfirmModal";
import AlertModal from "./AlertModal";
import { useModalContext } from "../contexts/ModalContext";

const MODAL_COMPONENTS = {
  confirm: ConfirmModal,
  alert: AlertModal,
};

export default function ModalRenderer() {
  const { modalData, confirmModal, closeModal } = useModalContext();

  if (!modalData) return null;

  const { type, props } = modalData;
  const ModalComponent = MODAL_COMPONENTS[type];

  if (!ModalComponent) return null;

  const extraProps =
    type === "confirm"
      ? {
          onCancel: () => confirmModal(false),
          onConfirm: () => confirmModal(true),
        }
      : {
          onClose: closeModal,
        };

  return <ModalComponent {...props} {...extraProps} />;
}