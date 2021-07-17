import React from "react";

function ChatRoom(prop:any) {
    return <>
        <button onClick={prop.leave}>Log Out</button>
        <br/>
        {prop.roomData.id} + {prop.roomData.name} + {prop.roomData.creator} + {prop.roomData.code}
        <br/>
        <br/>
        <br/>

        <div>
            <img />
            <div>Roomname</div>
            <div>Username</div>
        </div>
        <div>
            <ul>
                <li><img />Message</li>
                <li><img />Message</li>
                <li><img />Message</li>
            </ul>
        </div>
        <div>
            <div>Embedd</div>
            <div><input placeholder="Message"></input></div>
            <div><button>Send</button></div>
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
