import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import MyPage from "./mypage/MyPage";
import MyPage2 from "./mypage/MyPage2";
import Correct from "./mypage/Correct";
import Reward from "./mypage/Reward";
import Login from "./user/Login";
import Join from "./user/Join";
import Welcome from "./user/Welcome";
import Community from "./community/Community";
import Write from "./community/Write";
import Map from "./map/map";
import Verification from "./map/Verification";
import Guide from "./map/guide";
import GlobalStyle from "./GlobalStyle"; // 🔹 전역 스타일 파일 불러오기
import Admin from "./map/Admin";
import AdminDetail from "./map/AdminDetail";

// 참고용 페이지(지도나 가이드페이지)들 경로 설정 해놓음. 추후 삭제
import MapReference from "./Extra/MapReference";
import SplashReference from "./Extra/SplashReference";

function App() {
  return (
    <>
      {/* 전역 스타일 적용 */}
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />

          {/* 마이페이지 관련 경로 */}
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage2" element={<MyPage2 />} />
          <Route path="/correct" element={<Correct />} />
          <Route path="/reward" element={<Reward />} />

          {/* 유저 관련 경로 */}
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/welcome" element={<Welcome />} />

          {/* 지도 관련 경로 */}
          <Route path="/plogging" element={<Map />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/detail/:id" element={<AdminDetail />} />

          {/* 커뮤니티 관련 경로 */}
          <Route path="/community" element={<Community />} />
          <Route path="/write" element={<Write />} />

          {/* 참고용 페이지(삭제 예정) */}
          <Route path="/rm" element={<MapReference />} />
          <Route path="/rs" element={<SplashReference />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
