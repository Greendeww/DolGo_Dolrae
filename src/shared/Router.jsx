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

function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element= {<Login/>}/>
            <Route path="/KakaoLogin" element= {<KakaoLogin/>}/>
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
