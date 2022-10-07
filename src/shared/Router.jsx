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
import RndLocation from "../componenets/random/RndLocation";
import RandomSelect from "../componenets/random/RandomSelect";
import RandomList from "../componenets/random/RandomList";
import MyPage from "../pages/mypage/MyPage";
import MyPageChange from "../pages/mypage/MyPageChange";
import AmendmentRequest from "../pages/request/AmendmentRequest";
import RegistrationRequest from "../pages/request/RegistrationRequest";



function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/mypage" element={<MyPage/>}/>
            <Route path="/mypage/change" element={<MyPageChange/>}/>
            <Route path="/AmendmentRequest" element={<AmendmentRequest/>}/>
            <Route path="/RegistrationRequest" element={<RegistrationRequest/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element= {<Login/>}/>
            <Route path="/oauth/callback/kakao" element= {<KakaoLogin/>}/>
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
