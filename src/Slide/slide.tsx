import React from "react";

function Slide(prop:any) {
    if(prop.num == 1) {
        return <>Content {prop.num}</>
    } else if (prop.num == 2) {
        return <>Content {prop.num}</>
    } else {
        return <>Content {prop.num}</>
    }
}

export default Slide