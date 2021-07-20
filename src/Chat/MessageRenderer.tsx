import React from "react";
import { useritem } from "../type/useritem";

function MessageRenderer(prop: any) {
    return <>
        {(prop.message == undefined) || (console.log("conditional",prop.message)) ? 
            <div>No message</div> :
            prop.message.map((msg : any, key:any) => {
                console.log("to show",msg);
                let isMe = msg.sender == prop.user.name ? "msgself" : "";
                return <div key={key} className={isMe}>{msg.text} + {msg.sender} + {msg.time}</div>;
            })
        }
    </>
}

export default MessageRenderer;