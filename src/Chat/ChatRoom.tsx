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
        
        <div className="container" style={{width: "70%"}}>
            <div className="row">
                <img src={logo} className="one columns"/>
                <div className="seven columns">Roomname</div>
                <div className="four columns">Username</div>
            </div>
            <div className="row">
                <ul className="twelve columns">
                    <li><img />Message</li>
                    <li><img />Message</li>
                    <li><img />Message</li>
                </ul>
            </div>
            <div className="row">
                <div className="four columns">Embedd</div>
                <div className="six columns"><input placeholder="Message"></input></div>
                <div className="two columns"><button>Send</button></div>
            </div>
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
