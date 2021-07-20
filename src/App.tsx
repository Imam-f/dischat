import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router, Switch, 
    Route, Link} from "react-router-dom";
import {w3cwebsocket as websocket} from "websocket";

// import {roomitem,roomlist} from './type/roomitem';
import {roomitem} from './type/roomitem';
import {messageitem} from './type/messageitem';
import {useritem} from './type/useritem';

import Chat from './Chat';
import Help from './Help';
import About from './About';

import logo from './logo.svg';

import "./css/skeleton.css"
import "./css/normalize.css"
import "./css/layout.css"

var roomPromise : any[] = [];
var globalRoomList : Array<roomitem> = [];
var joinedRoom : roomitem | null = window.localStorage.getItem("room") == undefined ? null : JSON.parse(window.localStorage.getItem("room") ?? "");
var localuser : useritem = new useritem("myself","");

let ws = new websocket("ws://localhost:8081");
ws.onmessage = (e) => {
    let messageReceived = JSON.parse(e.data.toString());
    let messageType = messageReceived.type;
    console.log("Message", e.data);

    switch (messageType) {
        case "RoomList":
            let dataroom : Array<roomitem> = [];
            // Parse room
            messageReceived.data.forEach((room : roomitem) => {
                dataroom.push(new roomitem(
                    room.id,
                    room.name,
                    room.creator,
                    room.code
                ));
                globalRoomList = dataroom;
            })
            roomPromise[0]("resolve");
            break;
        case "EnterRoom":
            // Parse room
            // Rerender component
            roomPromise[1](messageReceived.data[1]);
            break;
        case "MakeRoom":
            roomPromise[2](messageReceived.data);
            break;
        case "NewMessage":
            // Parse message
        case "ping":
            ws.send(JSON.stringify({type:"pong"}));
            break;
        default:
            break;
    }
}


function App() {
    const [isInRoom,setInRoom] = useState( window.localStorage.getItem("inRoom") == undefined ? false : true );
    const [roomDataState,setRoomDataState] = useState<roomitem>(window.localStorage.getItem("room") == undefined ? null : JSON.parse(window.localStorage.getItem("room") ?? ""));
    
    const [roomList,setRoomList] = useState<Array<roomitem>>([]);
    const [messageList,setMessageList] = useState<messageitem>(new messageitem("a",["a","coeg","coba"]));
    const [user,setUser] = useState<useritem>(localuser);

    const [renderSwitch,flip] = useState(true);

    useEffect(() => {
        getRoom();
        if(window.localStorage.getItem("room") != undefined) {
            enterRoom(JSON.parse(window.localStorage.getItem("room") ?? ""));
        }
    },[])
    
    const getRoom = () => {
        let msg = {
            type: "RoomList",
            payload: ""
        }
        if(ws.readyState == ws.OPEN) {
            ws.send(JSON.stringify(msg));
        }
        var roomdata = new Promise((resolve, reject) => {
            roomPromise[0] = resolve;
        });
        roomdata.then(()=>{
            setRoomList(globalRoomList);
            flip(!renderSwitch);
        })
    }
    const makeRoom = (e:any) => {
        // makeroom
        // enterrrom
        if(ws.readyState == ws.OPEN) {
            let msg = {
                type: "RoomMake",
                payload: {
                    name: e,
                    creator: user.name
                },
                sender: user
            }
            console.log("PreRoomMake",JSON.stringify(msg));
            ws.send(JSON.stringify(msg));
            var roomdata = new Promise((resolve, reject)=> {
                roomPromise[2] = resolve;
            })
            roomdata.then((room:any)=>{
                let temp = new roomitem(room.id,room.name,room.creator,room.code);
                console.log("RoomMake",temp);
                setRoomDataState(temp);
                setInRoom(true);
                joinedRoom = roomDataState;
                window.localStorage.setItem("inRoom","true");
                window.localStorage.setItem("room",JSON.stringify(joinedRoom));
            });
        }
    }
    const enterRoom = (room : roomitem) => {
        if(ws.readyState == ws.OPEN) {
            let msg = {
                type: "RoomEnter",
                payload: room,
                sender: user
            }
            console.log("enterroom send",JSON.stringify(msg));
            ws.send(JSON.stringify(msg));
            let enterroom = new Promise((resolve, reject)=>{
                roomPromise[1] = resolve;
            })
            enterroom.then((result : any)=> {
                console.log("result",result);
                room.id = result;
                setRoomDataState(room);
                setInRoom(true);
                joinedRoom = roomDataState;
                window.localStorage.setItem("inRoom","true");
                window.localStorage.setItem("room",JSON.stringify(joinedRoom));
            });
        } else {
            ws = new websocket("ws://localhost:8081");
        }
    }
    const leaveRoom = () => {
        if(ws.readyState == ws.OPEN) {
            let msg = {
                type: "RoomExit",
                payload: roomDataState,
                sender: user
            }
            console.log("leaveRoom",JSON.stringify(msg));
            ws.send(JSON.stringify(msg));
        }
        setInRoom(false);
        joinedRoom = null;
        window.localStorage.removeItem("inRoom");
        window.localStorage.removeItem("room");
    }

    return <>
        <Router>
        <header className="header">
            <div className="appLogo">
                <img style={{height:"8em",width:"8em"}} src={logo} />
                <p className="titlename">Dischat</p>
                <div style={{position:"relative",top:"50px",left:"-170px",opacity:"60%"}}>Made with react</div>
            </div>
            <div className="tabs">
                <div><Link to="/">Chat</Link></div>
                <div><Link to="/help">Help</Link></div>
                <div><Link to="/about">About</Link></div>
            </div>
        </header>
        <Switch>
            <Route path="/help"><Help/></Route>
            <Route path="/about"><About/></Route>
            <Route path="/">
                <Chat isInRoom={isInRoom} roomDataState={roomDataState}
                    roomList = {roomList}
                    getRoom={getRoom} makeRoom={makeRoom}
                    leaveRoom={leaveRoom} enterRoom={enterRoom} 
                    messageList={messageList}
                    user={user} setuser={setUser}/>
            </Route>
        </Switch>
        </Router>
    </>
}




// ws.onopen = () => {}        // request room
// ws.onclose = () => {}       // cleanup
// ws.onerror = () => {}       // reconnect


// message
    // ask room
    // enter room
    // send chat
    // receive chat
    // quit room


// todo make header
// todo loading
// // todo global chat



export default App