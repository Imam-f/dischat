import React, {useState} from "react";
import RoomSelector from "./Chat/RoomSelector";
import ChatRoom from "./Chat/ChatRoom";

function Chat(prop:any) {

    return <>
        Chat
        <br/>
        {prop.isInRoom ? <ChatRoom roomData={prop.roomDataState} leave={prop.leaveRoom}/> : <RoomSelector join={prop.enterRoom}/> }
    </>
}

class roomitem {
    id: number;
    name: string;
    creator: string;
    code: string;

    constructor(id: number, name: string, creator: string, code: string) {
        this.id = id;
        this.name = name;
        this.creator = creator;
        this.code = code;
    }
}
// Chat wrapper

export default Chat;