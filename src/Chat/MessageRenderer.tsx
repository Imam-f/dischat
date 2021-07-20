import React from "react";

function MessageRenderer(prop: any) {
    return <>
        {prop.message == undefined ? 
            <div>No message</div> :
            prop.message.messageList.map((msg : any, key:any) => {
                return <div key={key}>{msg}</div>;
            })
        }
    </>
}

export default MessageRenderer;