// ✅ ModalProvider 사용 위치 (실무 팁과 구조도 함께)

// 1️⃣ index.jsx 또는 main.jsx 에서 App을 감싸는 방식이 실무에서 일반적이야
// 이렇게 하면 모든 컴포넌트에서 useModalContext()를 사용할 수 있어!


import React from 'react' //React 호출. JSX를 쓰기 위해 꼭 필요함.
import ReactDOM from 'react-dom/client' // React 18부터는 react-dom/client에서 createRoot를 써야 한다. 리액트 앱을 브라우저 DOM에 연결하기 위한 API
import App from './App' // 페이지와 라우팅을 관리하는 핵심 컴포넌트, 실제 라우팅되는 페이지
import { BrowserRouter } from 'react-router-dom' // React Router 기능을 쓰기 위해 호출, BrowserRouter : 라우팅 관리
import { ModalProvider } from "./contexts/ModalContext"; // ✅ 모달 컨텍스트 가져오기, 모달 전역 상태를 제공
import ModalRenderer from "./components/ModalRenderer";


// React.StrictMode : 개발 중 경고나 실수 감지를 강화해주는 감시자 역할. (필수는 아니지만 추천)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
      {/* App 내부는 페이지, ModalRenderer는 항상 떠 있는 공통 UI */}
        <>
          <App />
          <ModalRenderer />
        </>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
)




// ✅ 실무 팁 요약
// - Context는 Provider로 감싸야 자식들이 데이터를 받을 수 있어
// - 모달은 보통 App 전체에서 쓰이기 때문에 최상단(main.jsx or index.jsx)에 배치해
// - 여러 개의 Context가 있다면 아래처럼 중첩해서 사용 가능해:

// <ThemeProvider>
//   <AuthProvider>
//     <ModalProvider>
//       <App />
//     </ModalProvider>
//   </AuthProvider>
// </ThemeProvider>

// ✨ 모달은 페이지 전환과 상관없이 언제든 열릴 수 있기 때문에 Routes 바깥에서 렌더링됨
//   ↳ ModalRenderer는 App.jsx 하단에 항상 떠 있도록 두는 게 실무 스타일

// 💡 구조 요약 시각 흐름
//
// index.jsx
//   └── <ModalProvider>
//         └── <App />
//               ├── <Routes>
//               │     └── MainPage / ProductPage
//               └── <ModalRenderer />  ← 항상 렌더링

// 이렇게 구조를 잡으면 어디서든 모달을 띄울 수 있고 유지보수도 편해!