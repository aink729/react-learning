import { Routes, Route } from "react-router-dom"; //라우터에서 경로를 설정할 수 있는 컴포넌트 호출
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";

// 화면에 보여줄 컴포넌트를 결정하는 중심 컨트롤러, “지금 어떤 페이지를 보여줄지”
// React Router를 사용할 경우, App.jsx 안에는 보통 Routes와 Route가 들어 있어

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  );
}

export default App;