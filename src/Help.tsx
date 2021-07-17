import React from "react";
import Slide1 from "./Slide/slide1"

function Help() {
    return <>
        Help
        <div>
            <div>prev</div>
            <div>
                <Slide1/>
            </div>
            <div>next</div>
            <div>down</div>
        </div>
    </>
}

// slide show format
// enter > mkroom > chat > quit

export default Help;
