import { Link } from "react-router-dom";
import "./Header.css";

/**
 * 공통 헤더 컴포넌트
 * - 로고 및 네비게이션 링크 포함
 * - 모든 페이지 상단에 고정
 */

export default function  Header() {
    return (
        <header className="header" id="header">
            <div className="header__logo">
                <Link to="/" className="header__logo-link">
                    🛍️ 쇼핑몰
                </Link>
            </div>
            <nav className="header__nav">
                <Link to="/" className="header__link">
                    홈
                </Link>
                <Link to="/about" className="header__link">
                소개
                </Link>
            </nav>
        </header>
    )
}