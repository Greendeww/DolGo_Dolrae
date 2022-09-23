import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login1 from "../pages/Login1";
import Login2 from "../pages/Login2";
import SignUp from "../pages/SignUp";
import Detail from "../pages/Detail";
import DetailRevise from "../componenets/details/DetailRevise";
import DetailForm from "../componenets/details/DetailForm";



function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/login" element= {<Login1/>}/>
            <Route path="/login2" element= {<Login2/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/detail/update/:placeId/:id" element={<DetailRevise/>}/>
            <Route path="/detail/form/:id" element={<DetailForm/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;