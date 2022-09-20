import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import KakaoLogin from "../pages/KakaoLogin";
import SignUp from "../pages/SignUp";
import Theme from "../pages/Theme";
import Theme1 from "../pages/Theme1";

function Router(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element= {<Login/>}/>
            {/* <Route path="/KakaoLogin" element= {<KakaoLogin/>}/>
            <Route path="/oauth/callback/kakao" element={<KakaoLogin/>}/> */}
            <Route path="/theme" element={<Theme/>}/>
            <Route path="/theme1" element={<Theme1/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;