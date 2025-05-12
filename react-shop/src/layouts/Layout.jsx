import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom"; // “자식 컴포넌트를 표시할 위치”를 알려주는 리액트 라우터 전용 컴포넌트



export default function Layout () {

  // 현재 페이지 확인
  const location = useLocation();
  const isMain = location.pathname === "/";
  
  return (
    <>
        {isMain ? <Header /> : <SubHeader />}
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  );
}