import React, {useEffect, useRef} from "react";

function MessageRenderer(prop: any) {
    const bottom : any = useRef();
    useEffect(() => {
        bottom && bottom.current && bottom.current.scrollIntoView({behavior: "smooth"});
    })
    return <>
        {(prop.message == undefined) ? 
            <div>No message</div> :
            prop.message.map((msg : any, key:any) => {
                let isMe = msg.sender == prop.user.name ? "msgself" : "";
                return <div key={key} className={isMe}>
                                    <b>{msg.sender}</b><br/>
                                    <h4 style={{margin: "0"}}>{msg.text}</h4>
                                    {msg.time}</div>;
            })
        }
        <span ref={bottom ?? null}></span>
    </>
}

export default MessageRenderer;