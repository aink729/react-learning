import { useState } from "react"; // 추가
import { Routes, Route } from "react-router-dom"; //라우터에서 경로를 설정할 수 있는 컴포넌트 호출
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import ConfirmModal from "./components/ConfirmModal";
import AlertModal from "./components/AlertModal";
import useModal from "./hooks/useModal";


// 화면에 보여줄 컴포넌트를 결정하는 중심 컨트롤러, “지금 어떤 페이지를 보여줄지”
// React Router를 사용할 경우, App.jsx 안에는 보통 Routes와 Route가 들어 있어

function App() {

  const confirmModal = useModal();
  const alertModal = useModal();

  const [selectedProductId, setSelectedProductId] = useState(null); // ✅ 공통 상태
  const [selectedProductName, setSelectedProductName] = useState(""); // ✅ 상품 이름 상태 추가

  // 카드 클릭 시 이동 처리 (확인 후)
  const handleConfirm = (productId) => {
    window.location.href = `/product/${productId}`; // 또는 useNavigate 사용
  };



  return (
    <>

      {/* 📌 라우팅 구조 */}
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              openConfirm={(id, name) => {
                setSelectedProductId(id);     // ✅ 상태 저장
                setSelectedProductName(name);  // ✅ 이름 저장
                confirmModal.openModal();
              }}
              openAlert={(id, name) => {
                setSelectedProductId(id);     // ✅ 상태 저장
                setSelectedProductName(name);  // ✅ 이름 저장
                alertModal.openModal();
              }}
            />
          }
        />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

      {/* 📌 다중 모달 구조 (Routes 바깥에서 렌더링됨, 페이지와는 상관없는 “공통 오버레이” 역할. 항상 렌더링 가능하게 함) */}
      { confirmModal.isOpen && (
        <ConfirmModal
          message={`${selectedProductId}번째 상품 (${selectedProductName})을 상세보기 하시겠습니까?`} // ✅ 메시지 업데이트
          onConfirm={()=> {
            handleConfirm(selectedProductId); // ✅ 저장된 ID로 이동
            confirmModal.closeModal();
          }}
          onCancel={confirmModal.closeModal}
        />
      )}

      {alertModal.isOpen && (
        <AlertModal
          message={`${selectedProductId}번째 상품 (${selectedProductName})은 품절입니다.`} // ✅ 메시지 업데이트
          onClose={alertModal.closeModal}
        />
      )}

    </>
  );
}

export default App;