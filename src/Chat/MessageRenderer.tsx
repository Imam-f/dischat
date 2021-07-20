import React, {useEffect, useRef} from "react";

function MessageRenderer(prop: any) {
    const bottom = useRef();
    useEffect(() => {
        bottom.current.scrollIntoView({behavior: "smooth"});
    })
    return <>
        {(prop.message == undefined) || (console.log("conditional",prop.message)) ? 
            <div>No message</div> :
            prop.message.map((msg : any, key:any) => {
                console.log("to show",msg);
                let isMe = msg.sender == prop.user.name ? "msgself" : "";
                return <div key={key} className={isMe}>
                                    <b>{msg.sender}</b><br/>
                                    <h4>{msg.text}</h4>
                                    {msg.time}</div>;
            })
        }
        <span ref={bottom}></span>
    </>
}

export default MessageRenderer;