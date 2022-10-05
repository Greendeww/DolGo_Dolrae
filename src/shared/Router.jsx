import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/user/Login";
import KakaoLogin from "../pages/user/KakaoLogin";
import SignUp from "../pages/user/SignUp";
import Select from "../pages/tourist/Select";
import List from "../pages/tourist/List";
import Detail from "../pages/tourist/Detail";
import DetailRevise from "../componenets/details/DetailRevise";
import DetailForm from "../componenets/details/DetailForm";
import Main from "../pages/tourist/Main";
import Random from "../pages/tourist/Random";
import MyPage from "../pages/mypage/MyPage";
import MyPageChange from "../pages/mypage/MyPageChange";
import Report from "../pages/request/Report";
import Register from "../pages/request/Register";

function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/mypage" element={<MyPage/>}/>
            <Route path="/mypage/change" element={<MyPageChange/>}/>
            <Route path="/report" element={<Report/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element= {<Login/>}/>
            <Route path="/oauth/callback/kakao" element= {<KakaoLogin/>}/>
            <Route path="/select" element={<Select/>}/>
            <Route path="/list" element={<List/>}/>
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/detail/update/:placeId/:id" element={<DetailRevise/>}/>
            <Route path="/detail/form/:id" element={<DetailForm/>}/>
            <Route path="/random" element={<Random/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;
