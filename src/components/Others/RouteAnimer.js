import React from "react";
import { Routes, Route} from 'react-router-dom';

import Weapon from "../Page/Weapon";
import Main from "../Page/Main";

function RouteAnimer(){
    return(
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/weapons/:name" element={<Weapon />}/>
        </Routes>
    )
}

export default RouteAnimer;