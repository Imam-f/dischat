import React from "react";
import RoomSelector from "./Chat/RoomSelector";
import ChatRoom from "./Chat/ChatRoom";

function Chat(prop:any) {
    return <>
        <main className="maincontent">
        Chat
        <br/>
            { prop.isInRoom ? 
            <ChatRoom messageList={prop.messageList} sendMessage={prop.sendMessage}
                roomData={prop.roomDataState} leave={prop.leaveRoom} user={prop.user}/> 
            : 
            <RoomSelector 
                user = {prop.user} setuser={prop.setuser}
                list={prop.roomList} make={prop.makeRoom} refresh={prop.getRoom}
                join={prop.enterRoom}/> }
        </main>
    </>
}

// Chat wrapper

export default Chat;