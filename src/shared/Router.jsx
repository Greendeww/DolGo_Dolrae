import { BrowserRouter, Route, Routes } from "react-router-dom";

// user
import Login from "../pages/user/Login";
import KakaoLogin from "../pages/user/KakaoLogin";
import SignUp from "../pages/user/SignUp";

// list
import Select from "../pages/tourist/Select";
import List from "../pages/tourist/List";
import Detail from "../pages/tourist/Detail";
import DetailRevise from "../componenets/details/DetailRevise";
import DetailForm from "../componenets/details/DetailForm";
import Main from "../pages/tourist/Main";
import Random from "../pages/tourist/Random";
import RndLocation from "../componenets/random/RndLocation";
import RandomSelect from "../componenets/random/RandomSelect";
import RandomList from "../componenets/random/RandomList";
import SearchPage from "../pages/tourist/SearchPage";
import SearchSelList from "../componenets/searchList/SearchSelList";

// mypage
import MyPage from "../pages/mypage/MyPage";
import MyPageChange from "../pages/mypage/MyPageChange";

import AmendmentRequest from "../pages/request/AmendmentRequest";
import RegistrationRequest from "../pages/request/RegistrationRequest";
import Administrator from "../pages/manager/Administrator";
import RequestEdit from "../pages/manager/RequestEdit";
import RequestDetail from "../pages/manager/RequestDetail";
import RequestPost from "../pages/manager/RequestPost";

import MyRequestDetail from "../componenets/mypage/mypage/request/MyRequestDetail";
import MapLike from "../componenets/mypage/mypage/likeList/MapLike";
import SelectLike from "../componenets/mypage/mypage/likeList/SelectLike";

// request
import EditRequest from "../pages/request/EditRequest";
import PostRequest from "../pages/request/PostRequest";

// manager
import RequestList from "../pages/manager/RequestList";
import RequestDetail from "../pages/manager/RequestDetail";
import Post from "../pages/manager/Post";
import Edit from "../pages/manager/Edit";

import { useEffect } from "react";
import axios from "axios";


function Router() {
  // 토큰 재발급
  const getToken = async () => {
    try {
      // alert("토큰 만료");
      const res = await axios.post(
        process.env.REACT_APP_BASE_URL + "/api/member/retoken",
        {},
        {
          headers: {
            RefreshToken: sessionStorage.getItem("REFRESH_TOKEN"),
          },
        }
      );

      sessionStorage.removeItem("REFRESH_TOKEN");
      sessionStorage.setItem("ACCESS_TOKEN", res.headers.authorization);
      sessionStorage.setItem("REFRESH_TOKEN", res.headers.refreshtoken);

      console.log("토큰이 갱신되었습니다.");
    } catch {
      console.log("토큰 갱신에 실패하였습니다.");
    }
  };

  useEffect(() => {
    setInterval(() => {
      console.log("실행")
      if (sessionStorage.getItem("REFRESH_TOKEN") !== null) {
        alert("토큰 재발급");
        getToken();
      } else {
        return;
      }
    }, 1200000);
  }, []);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* main */}
        <Route path="/" element={<Main />} />

        {/* user */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/callback/kakao" element={<KakaoLogin />} />

        {/* mypage */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/change" element={<MyPageChange />} />
        <Route path="/mypage/like/map" element={<MapLike />} />
        <Route path="/mypage/like/select" element={<SelectLike />} />
        <Route path="/myrequest/detail/:id" element={<MyRequestDetail />} />

        {/* request */}
        <Route path="/request/edit/:id" element={<EditRequest />} />
        <Route path="/request/post" element={<PostRequest />} />

        {/* manager */}
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/post" element={<Post />} />
        <Route path="/request/list" element={<RequestList />} />
        <Route path="/request/detail/:id" element={<RequestDetail />} />

        {/* list */}
        <Route path="/select" element={<Select />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/detail/update/:placeId/:id" element={<DetailRevise />} />
        <Route path="/detail/form/:id" element={<DetailForm />} />
        <Route path="/random" element={<Random />} />
        <Route path="/rndlocation" element={<RndLocation />} />
        <Route path="/rndselect/:si/:area" element={<RandomSelect />} />
        <Route path="/rnd" element={<RandomList />} />
        <Route path="/search/:title" element={<SearchPage />} />
        <Route path="/search/:title/:si/:area" element={<SearchSelList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
