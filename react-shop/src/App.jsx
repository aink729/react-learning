import { Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout';
import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

function App() {

  return (
  
    <Routes>
      {/* 중첩 라우팅 */}
      <Route path="/" element={<Layout />}>
        {/* 메인 페이지 (루트 경로) */}
        <Route index element={<MainPage />} />

        {/* 카드 목록 페이지 */}
        <Route path="list" element={<ListPage />} />

        {/* 카드 상세 페이지 */}
        <Route path="detail/:id" element={<DetailPage />} />
      </Route>
    </Routes>
  )
}

export default App
