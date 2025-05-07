// import { useState } from "react"; // 상태 관리용 hook (모달 여닫을때 사용)
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 호출
import { useModalContext } from "../contexts/ModalContext";
import './Card.css'; // css 파일 불러오기
// import useModal from '../hooks/useModal';
// import ConfirmModal from './ConfirmModal'; // 모달 컴포넌트 호출

//컴포넌트는 "준비 영역(위쪽)" + "실행 결과 반환(return)"
export default function Card({ id, title, content, price, imageUrl, onConfirmClick, onAlertClick }) {
    // 👉 여기는 JavaScript 영역 (로직 작성)
  // 여기에 변수, 함수, 조건문 등 자유롭게 작성 가능

  const navigate = useNavigate();
  // const { openModal } = useModalContext(); // 전역 모달 훅 꺼냄

  const { openModalAsync } = useModalContext();
  const handleClick = async () => {
    const result = await openModalAsync("confirm", {
      message: "정말 구매하시겠습니까?",
    });
  
    if (result) {
      // 사용자가 확인 눌렀을 때
      console.log("✅ 구매 진행");
    } else {
      console.log("❌ 구매 취소");
    }
  };
  
        // const [showModal, setShowModal] = useState(false);
        // const { isOpen, openModal, closeModal } = useModal();



        // ✅ 1. 바로 이동하는 방식
        // const handleDirectClick = () => {
        //     navigate(`/product/${id}`);
        // };


        // ✅ 2. 확인 후 이동하는 방식
        // const handleConfirmClick = () => {
        //     const answer = window.confirm(`${title}을(를) 정말 보시겠습니까?`);
        //     if (answer) {
        //       navigate(`/product/${id}`);
        //     }
        // };


            // const handleConfirm = () => {
            //     // closeModal();
            //     navigate(`/product/${id}`);
            // };

            // function renderModal() {
            //     if (!isOpen) return null;
              
            //     return (
            //       <ConfirmModal
            //         message={`${title}을(를) 상세보기 하시겠습니까?`}
            //         onConfirm={handleConfirm}
            //         onCancel={closeModal}
            //       />
            //     );
            //   }


    return (
         // 👉 여기는 JSX 반환 (HTML 구조, 실제로 화면에 표시할 JSX만 작성)
         <div className="card">
            <img src={imageUrl} alt={title} className="card-image" />
    
            <h2>{title}</h2>
            <p>{content}</p>
            <p className="price">{price}</p>
    
            {/* ✅ 버튼 1: 바로 이동 */}
            {/* <button className="buy-button" onClick={handleDirectClick}>
            🔍 바로보기
            </button> */}

            {/* ✅ 버튼 2: 알림 후 이동 */}
            {/* <button className="buy-button" onClick={handleConfirmClick}>
                ✅ 확인 후 보기
            </button> */}

            {/* <button className="buy-button" onClick={openModal}>
                🧾 모달 확인 후 보기
            </button> */}

        <button
                className="buy-button"
                onClick={() => {
                  openModalAsync("confirm", {
                    message: `${title}을(를) 상세보기 하시겠습니까?`,
                    onConfirm: () => navigate(`/product/${id}`),
                  });
                }}
              >
                ✅ 확인 모달
              </button>

              <button
                className="buy-button"
                onClick={() => {
                  openModalAsync("alert", {
                    message: `${title}은(는) 품절입니다.`,
                  });
                }}
              >
                🧾 알림 모달
              </button>
  
            {/* {renderModal()} */}
            
        </div>
    )
}