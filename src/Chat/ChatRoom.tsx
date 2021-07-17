import React from "react";

function ChatRoom(prop:any) {
    return <>
        {prop.roomData.id} + {prop.roomData.name} + {prop.roomData.creator} + {prop.roomData.code}
        <br/>
        <button onClick={prop.leave}>Log Out</button>
    </>
}

// chat
// bar
    // embedd
    // text
    // send
    // profile


export default ChatRoom;
