import React from 'react' //React 호출. JSX를 쓰기 위해 꼭 필요함.
import ReactDOM from 'react-dom/client' // React 18부터는 react-dom/client에서 createRoot를 써야 한다. 리액트 앱을 브라우저 DOM에 연결하기 위한 API
import App from './App' // 페이지와 라우팅을 관리하는 핵심 컴포넌트
import { BrowserRouter } from 'react-router-dom' //React Router 기능을 쓰기 위해 호출


// React.StrictMode : 개발 중 경고나 실수 감지를 강화해주는 감시자 역할. (필수는 아니지만 추천)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)