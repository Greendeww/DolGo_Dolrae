import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import KakaoLogin from "../pages/KakaoLogin";
import SignUp from "../pages/SignUp";
import Select from "../pages/Select";
import List from "../pages/List";
import Detail from "../pages/Detail";
import DetailRevise from "../componenets/details/DetailRevise";
import DetailForm from "../componenets/details/DetailForm";
import Main from "../pages/Main";
import Random from "../pages/Random";
import RndLocation from "../componenets/random/RndLocation";
import RandomSelect from "../componenets/random/RandomSelect";
import RandomList from "../componenets/random/RandomList";
import MyPage from "../pages/MyPage";
import MyPageChange from "../pages/MyPageChange";
import Report from "../pages/Report";
import Register from "../pages/Register";


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
            <Route path="/KakaoLogin" element= {<KakaoLogin/>}/>
            <Route path="/select" element={<Select/>}/>
            <Route path="/list" element={<List/>}/>
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/detail/update/:placeId/:id" element={<DetailRevise/>}/>
            <Route path="/detail/form/:id" element={<DetailForm/>}/>
            <Route path="/random" element={<Random/>}/>
            <Route path="/rndlocation" element={<RndLocation/>}/>
            <Route path="/rndselect/:si/:area" element={<RandomSelect/>}/>
            <Route path="/rnd" element={<RandomList/>}/>

        </Routes>
        </BrowserRouter>
    )
}

export default Router;
