import React, {useState, useEffect} from "react";
import RoomItem from "./RoomItem"
// import { roomitem } from "../type/roomitem";
// import { messageitem } from "../type/messageitem"

function RoomSelector(prop:any) {
    //const [room,setRoom] = useState<Array<roomitem>>([]);
    /* useEffect(() => {
        getRoom();
    },[]); */
    // list={prop.getRoom} 
    // make={prop.makeRoom} 
    // join={prop.enterRoom}

    const searchRoom = () => {}

    return <>
        <div>
            <div>
                <input type="search" placeholder="Add name"/>
                <button>Set</button>
            </div>

            <input type="search"/>
            <button onClick={searchRoom}>Search</button>
            <button onClick={prop.make}>Add room</button>

            <br/>
            <button onClick={prop.list}>Refresh</button>
            <br/><br/><br/>

            <table>
                <thead>
                    <tr>
                    <td>Id</td><td>Name</td><td>Creator</td><td>Code</td><td></td>
                    </tr>
                </thead>
                <tbody>
                {
                    prop.list.map((item: any, key: any) => {
                        return <RoomItem key={key} items={item} join={prop.join}/>
                    })
                }
                </tbody>
            </table>
            
        </div>
    </>
}

/*
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
*/

// flyout if no name
// search
// tablename
    // id name creator size join

export default RoomSelector;