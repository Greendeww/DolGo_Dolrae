import {Route, Routes} from "react-router-dom"
import Comments from "../componenets/details/Comments";
import Detail from "../pages/Detail";


function Router(){
    return(
        <Routes>
            <Route path="/detail/:id" element={<Detail />} />
        </Routes>
    )
}

export default Router;