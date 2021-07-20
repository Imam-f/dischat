import React, {useState, useEffect, useRef, FormEvent} from "react";
import { render } from "react-dom";
import RoomItem from "./RoomItem"
// import { roomitem } from "../type/roomitem";
// import { messageitem } from "../type/messageitem"

function RoomSelector(prop:any) {

    const [name,setName] = useState("");
    const [renderswitch,flip] = useState(false);

    const searchRoom = () => {}
    const chUser = (e:React.SyntheticEvent) => {
        prop.setuser(name);
        e.preventDefault();
        flip(!renderswitch);
    };
    const nameHandle = (e:any) => {
        setName(e.target.value);
    }

    return <>
        <div>
            <div>
                <form>
                    <input type="search" onChange={nameHandle} 
                        placeholder="Add name"/>
                    <button onClick={chUser}>Set</button>
                    <span>{prop.user.name}{name}</span>
                </form>
            </div>

            <input type="search" placeholder="Room Name"/>
            <button onClick={searchRoom}>Search</button>
            <button onClick={prop.make}>Add room</button>

            <br/><br/>
            <button onClick={prop.refresh}>Refresh</button>
            <br/><br/><br/>

            <table>
                <thead>
                    <tr>
                    <td>Id</td><td>Name</td><td>Creator</td><td>Code</td><td></td>
                    </tr>
                </thead>
                <tbody>
                {
                    prop.list.map( (item: any, key: any) => {
                        console.log("Down here",item);
                        return <RoomItem key={key} items={item} join={prop.join}/>
                    }) 
                }
                </tbody>
            </table>
            
        </div>
    </>
}


//const [room,setRoom] = useState<Array<roomitem>>([]);
/* useEffect(() => {
    getRoom();
},[]); */
// list={prop.getRoom} 
// make={prop.makeRoom} 
// join={prop.enterRoom}
    
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