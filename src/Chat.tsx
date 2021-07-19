import React, {useState} from "react";
import RoomSelector from "./Chat/RoomSelector";
import ChatRoom from "./Chat/ChatRoom";

function Chat(prop:any) {
    return <>
        <main className="maincontent">
        Chat
        <br/>
            { prop.isInRoom ? 
            <ChatRoom messageList={prop.messageList} roomData={prop.roomDataState} 
                leave={prop.leaveRoom}/> 
            : 
            <RoomSelector list={prop.roomList} make={prop.makeRoom} refresh={prop.getRoom}
                join={prop.enterRoom}/> }
        </main>
    </>
}

// Chat wrapper

export default Chat;