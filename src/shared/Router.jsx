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

// mypage
import MyPage from "../pages/mypage/MyPage";
import MyPageChange from "../pages/mypage/MyPageChange";
import MyRequestDetail from "../componenets/mypage/mypage/request/MyRequestDetail";

// request
import EditRequest from "../pages/request/EditRequest";
import PostRequest from "../pages/request/PostRequest";

// manager
import RequestList from "../pages/manager/RequestList";
import RequestDetail from "../pages/manager/RequestDetail";
import Post from "../pages/manager/Post";
import Edit from "../pages/manager/Edit";
import SearchSelList from "../componenets/searchList/SearchSelList";
import MapLine from "../componenets/maps/MapLine";

import { getCookie } from "./Cookie";
import { useEffect } from "react";
import { instance } from "./Api";
import axios from "axios";

function Router() {

  // 토큰 재발급
  const getToken = async () => {
    // const res = await instance.post("/api/member/retoken")
    // console.log(res)

    await axios
      .post(process.env.REACT_APP_BASE_URL + "/api/member/retoken", {}, {
        headers: {
          "Authorization" : localStorage.getItem("ACCESS_TOKEN"),
          "RefreshToken" : localStorage.getItem("REFRESH_TOKEN"),
        },
      })
      .then((res) => {
        if (res.data.success === true) {
          localStorage.setItem("ACCESS_TOKEN", res.headers.authorization);
          localStorage.setItem("REFRESH_TOKEN", res.headers.refreshtoken);
          console.log("토큰 success");
          alert("토큰이 재발급되었습니다. success");
        } else if (res !== null ){
          localStorage.setItem("ACCESS_TOKEN", res.headers.authorization);
          localStorage.setItem("REFRESH_TOKEN", res.headers.refreshtoken);
          console.log("토큰 null");
          alert("토큰이 재발급되었습니다. null");
        } else if (res !== undefined){
          localStorage.setItem("ACCESS_TOKEN", res.headers.authorization);
          localStorage.setItem("REFRESH_TOKEN", res.headers.refreshtoken);
          console.log("토큰 undefined");
          alert("토큰이 재발급되었습니다. undefined");
        }
      });
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/callback/kakao" element={<KakaoLogin />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/change" element={<MyPageChange />} />
        <Route path="/request/edit/:id" element={<EditRequest />} />
        <Route path="/request/post" element={<PostRequest />} />
        <Route path="/request/list" element={<RequestList />} />
        <Route path="/request/detail/:id" element={<RequestDetail />} />
        <Route path="/myrequest/detail/:id" element={<MyRequestDetail />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/post" element={<Post />} />
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
        <Route path="/maps" element={<MapLine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
