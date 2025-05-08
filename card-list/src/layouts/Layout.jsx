import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const isMain = location.pathname === "/";

  return (
    <>
      {isMain ? <Header /> : <SubHeader />}
      <main>
        <Outlet /> {/* 페이지 콘텐츠 들어가는 자리 */}
      </main>
      <Footer />
    </>
  );
}