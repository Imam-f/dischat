import React, {useState} from "react";
import RoomSelector from "./Chat/RoomSelector";
import ChatRoom from "./Chat/ChatRoom";

function Chat() {
    const [isInRoom,setInRoom] = useState(0);
    const [roomDataState,setRoomDataState] = useState<roomitem>();

    const enterRoom = (room : roomitem) => {
        setInRoom(1);
        setRoomDataState(room);
    }
    const leaveRoom = () => {
        setInRoom(0);
    }

    return <>
        Chat
        <br/>
        {isInRoom ? <ChatRoom roomData={roomDataState} leave={leaveRoom}/> : <RoomSelector join={enterRoom}/> }
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