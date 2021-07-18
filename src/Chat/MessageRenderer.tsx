import React from "react";

function MessageRenderer(prop: any) {
    return <div className="msgself"> {prop.message}</div>
}

export default MessageRenderer;