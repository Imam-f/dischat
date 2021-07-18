import React from "react";
import logo from "../logo.svg";

function ChatRoom(prop:any) {
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
                <div><img />Message</div>
                <div><img />Message</div>
                <div><img />Message</div>
                <div><img />Message</div>
                <div><img />Message</div>
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
