import React, {useState} from "react";
import logo from "../logo.svg";
import MessageRenderer from "./MessageRenderer";
import { messageitem } from "../type/messageitem";

function ChatRoom(prop:any) {
    // Roomdata
    // leave
    // messageStore

    const [message, getMessage] = useState<messageitem>();
    prop.messageStore = (m:any) => {
        getMessage(m);
    }

    return <>
        <br/>
        <button onClick={prop.leave}>Exit</button>
        <br/>
        {prop.roomData.id} + {prop.roomData.name} + {prop.roomData.creator} + {prop.roomData.code}
        <br/>
        <br/>
        <br/>
        
        <div className="chatbox">
            <img src={logo} className="a"/>
            <div className="b">Username</div>
            <div className="c">Room</div>

            <div className="d">
                <div>
                    <MessageRenderer message={message}/>
                </div>
            </div>

            <div className="f"><input type="search" placeholder="Message"></input></div>
            <div className="g"><button>Send</button></div>
        </div>
    </>
}

// chat
// bar
    // embedd
    // text
    // send
    // profile


export default ChatRoom;
