import React from "react";
import Slide from "./Slide/Slide";

function Help() {
    return <>
        Help
        <div>
            <div>prev</div>
            <div>
                <Slide num={1}/>
            </div>
            <div>next</div>
            <div>down</div>
        </div>
    </>
}

// slide show format
// enter > mkroom > chat > quit

export default Help;
