import React from "react";

function Slide(prop:any) {
    if(prop.num == 1) {
        return <><div className="helpcontent">Content {prop.num} <br/></div></>
    } else if (prop.num == 2) {
        return <><div className="helpcontent">Content {prop.num} <br/></div></>
    } else {
        return <><div className="helpcontent">Content Zero <br/></div></>
    }
}

export default Slide