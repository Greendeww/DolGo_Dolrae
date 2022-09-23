import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import KakaoLogin from "../pages/KakaoLogin";
import SignUp from "../pages/SignUp";
import Theme from "../pages/Theme";
import Theme1 from "../pages/Theme1";
import Detail from "../pages/Detail";
import DetailRevise from "../componenets/details/DetailRevise";
import DetailForm from "../componenets/details/DetailForm";
import Main from "../pages/Main";

function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element= {<Login/>}/>
            {/* <Route path="/KakaoLogin" element= {<KakaoLogin/>}/>
            <Route path="/oauth/callback/kakao" element={<KakaoLogin/>}/> */}
            <Route path="/theme" element={<Theme/>}/>
            <Route path="/theme1" element={<Theme1/>}/>
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/detail/update/:placeId/:id" element={<DetailRevise/>}/>
            <Route path="/detail/form/:id" element={<DetailForm/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;

