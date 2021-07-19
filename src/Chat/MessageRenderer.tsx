import React from "react";
import { messageitem } from "../type/messageitem";

function MessageRenderer(prop: any) {
    return <>
        {prop.message.map((msg : any) => {
            return <div>{msg}</div>;
        })}
    </>
}

export default MessageRenderer;