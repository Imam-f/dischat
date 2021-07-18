import React, {useState, useEffect} from "react";
import { roomitem } from "../Type/roomitem";
import RoomItem from "./RoomItem"

function RoomSelector(prop:any) {
    const [room,setRoom] = useState<Array<roomitem>>([]);
    useEffect(() => {
        getRoom();
    },[]);
    
    let getRoom = () => {
        let roomtab : Array<roomitem> = [];
        roomtab.push(new roomitem(
            5, 
            "what is room",
            "myself", 
            "kshdlfhs8283"
        )); roomtab.push(new roomitem(
            7, 
            "is room",
            "who", 
            "kshddhkahs8283"
        )); roomtab.push(new roomitem(
            2, 
            "what room",
            "me", 
            "kshd435s8283"
        ));
        setRoom(roomtab);
    }
    
    return <>
        <div>
            <button onClick={getRoom}>Refresh</button>
            <button onClick={getRoom}>Add room</button>
            <input />
            <button onClick={getRoom}>Search</button>
            
            <table>
                <thead>
                    <tr>
                    <td>Id</td><td>Name</td><td>Creator</td><td>Code</td><td></td>
                    </tr>
                </thead>
                <tbody>
                {
                    room.map((item, key) => {
                        return <RoomItem key={key} items={item} join={prop.join}/>
                    })
                }
                </tbody>
            </table>
            
        </div>
    </>
}


// search
// tablename
    // id name creator size join

export default RoomSelector;