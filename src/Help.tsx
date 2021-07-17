import React, { useState } from "react";
import Slide from "./Slide/Slide";

function Help() {
    const [page, setPage] = useState(1);
    const addone = () => {
        setPage((page+1)%3)
    }
    const subone = () => {
        setPage((page+2)%3)
    }
    
    return <>
        Help
        <div>
            <div onClick={subone}>prev</div>
            <div>
                <Slide num={page}/>
            </div>
            <div onClick={addone}>next</div>
            <div>down</div>
        </div>
    </>
}

// slide show format
// enter > mkroom > chat > quit

export default Help;
