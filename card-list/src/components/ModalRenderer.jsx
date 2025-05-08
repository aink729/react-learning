import ConfirmModal from "./ConfirmModal";
import AlertModal from "./AlertModal";
import { useModalContext } from "../contexts/ModalContext";

// 🔹 모달 타입에 따라 어떤 컴포넌트를 띄울지 미리 매핑해둠
const MODAL_COMPONENTS = {
  confirm: ConfirmModal,
  alert: AlertModal,
};

export default function ModalRenderer() {
  const { modalData, confirmModal, closeModal } = useModalContext();

   // 🔹 아무 모달도 열려있지 않으면 아무것도 렌더링하지 않음
  if (!modalData) return null;

  // 🔹 모달의 타입과 props 분해
  const { type, props } = modalData;

  // 🔹 해당 타입에 맞는 모달 컴포넌트 선택
  const ModalComponent = MODAL_COMPONENTS[type];

  // 🔹 매핑된 컴포넌트가 없으면 아무것도 표시하지 않음 (예: 오타 방지)
  if (!ModalComponent) return null;

  // 🔹 모달 종류에 따라 props 다르게 전달
  const extraProps =
    type === "confirm"
      ? {
          onCancel: () => confirmModal(false),
          onConfirm: () => confirmModal(true),
        }
      : {
          onClose: closeModal,
        };


  // 🔹 실제로 모달 컴포넌트를 렌더링하며, 전달할 props도 함께 넘김
  // extraProps가 뒤에 있기 때문에, 동일한 키가 겹치면 extraProps가 우선됨 (뒤가 우선순위 높음)
  return <ModalComponent {...props} {...extraProps} />;
}