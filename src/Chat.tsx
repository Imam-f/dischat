import React, {useState} from "react";
import RoomSelector from "./Chat/RoomSelector";
import ChatRoom from "./Chat/ChatRoom";

function Chat(prop:any) {
    return <>
        <main className="maincontent">
        Chat
        <br/>
            { prop.isInRoom ? <ChatRoom roomData={prop.roomDataState} leave={prop.leaveRoom}/> : <RoomSelector join={prop.enterRoom}/> }
        </main>
    </>
}

// Chat wrapper

export default Chat;