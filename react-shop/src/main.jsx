// index.jsx 또는 main.jsx 에서 App을 감싸는 방식이 실무에서 일반적이야ㄴ
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './App'


// ✅ 여기서 global.css 불러와야 함!
import "./styles/global.css";   // 또는 "./index.css"
import "./styles/layout.css";   // 레이아웃 전용 CSS도 있으면 추가

// 리액트 애플리케이션을 브라우저의 실제 DOM에 “그려주는” 가장 핵심적인 진입점 코드

// 리액트 라우터를 사용할 때는 반드시 앱 전체를 이 <BrowserRouter>로 감싸야 돼.
// App 실제 우리가 만든 앱의 시작점 컴포넌트야. (= 라우팅 설정, 레이아웃, 공통 컴포넌트(Header, Footer 등)를 다 조합해.)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)