import React from "react";

function Slide(prop:any) {
    if(prop.num == 1) {
        return <>Content {prop.num} <br/></>
    } else if (prop.num == 2) {
        return <>Content {prop.num} <br/></>
    } else {
        return <>Content Zero <br/></>
    }
}

export default Slide