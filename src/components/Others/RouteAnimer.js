import React from "react";
import { Routes, Route} from 'react-router-dom';

import Main from "../Page/Main";

function RouteAnimer(){
    return(
        <Routes>
            <Route path="/" element={<Main />}/>
        </Routes>
    )
}

export default RouteAnimer;