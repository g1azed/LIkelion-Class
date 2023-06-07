
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

// 1. BrowserRouter 컴포넌트 :  UI와 URL을 연결합니다. 마치 SSR과 같이 URL을 사용할 수 있게합니다. ([https://reactrouter.com/docs/en/v6/routers/browser-router](https://reactrouter.com/en/6.4.4/router-components/browser-router))
// 2. Route 컴포넌트 : 현재 URL과 매칭된 UI를 렌더링 하는 역할을 합니다.
// 3. Routes 컴포넌트 : URL이 변경되면  `<Routes>` 는 모든 자식 `<Route>`
// 를 살펴보고 가장 알맞는 것을 매칭합니다.(https://v5.reactrouter.com/web/api/Switch), (https://reactrouter.com/docs/en/v6/components/routes)
