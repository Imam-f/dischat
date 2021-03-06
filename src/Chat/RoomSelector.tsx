import React, {useState, useRef} from "react";
import RoomItem from "./RoomItem"
// import { roomitem } from "../type/roomitem";
// import { messageitem } from "../type/messageitem"

function RoomSelector(prop:any) {

    const [name,setName] = useState("");
    const [searchbar,setSearch] = useState("");
    const [renderswitch,flip] = useState(false);

    const searchBarRef: any = useRef();

    const searchRoom = (e:any) => {
        e.preventDefault();
    }
    const chUser = (e:React.SyntheticEvent) => {
        let usrtemp = {...prop.user};
        usrtemp.name = name.toString();

        prop.setuser(usrtemp);
        window.localStorage.setItem("userName",usrtemp.name);
        window.localStorage.setItem("userImg",usrtemp.imageProfile);
        e.preventDefault();
        flip(!renderswitch);
    };
    const nameHandle = (e:any) => {
        setName(e.target.value);
    }
    const searchHandle = (e:any) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    return <>
        <div>
            <div>
                <form>
                    <span><h4>User : {prop.user.name}</h4></span>
                    <input type="search" onChange={nameHandle} 
                        placeholder="Add name"/>
                    <button onClick={chUser}>Set</button>
                </form>
            </div>

            <form>
                <input ref={searchBarRef} type="search" onChange={searchHandle} placeholder="Room Name"/>
                <button onClick={searchRoom}>Search</button>
                <button onClick={(e)=>{prop.make(searchbar);e.preventDefault();setSearch("");searchBarRef.current.value="";}}>Add room</button>
            </form>

            <button onClick={(e)=>{prop.refresh();setSearch("");searchBarRef.current.value="";}}>Refresh</button>
            <br/><br/><br/>

            <table>
                <thead>
                    <tr>
                    <td>Id</td><td>Name</td><td>Creator</td><td>Code</td><td></td>
                    </tr>
                </thead>
                <tbody>
                {
                    (prop.list.length == 0) ?  <tr><td/><td>Emptyroom</td></tr> : 
                        (searchbar.length < 1) ? prop.list.map( (item: any, key: any) => {
                            return <RoomItem key={key} items={item} join={prop.join}/>
                        }) : prop.list.filter((item:any) => {
                            return item.id.toString().toLowerCase().includes(searchbar) || item.name.toLowerCase().includes(searchbar) 
                                    || item.creator.toLowerCase().includes(searchbar) || item.code.toLowerCase().includes(searchbar);
                        }).map((item:any,key:any) => {
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