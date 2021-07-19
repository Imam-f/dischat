import React, {useState} from 'react';
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


const ws = new websocket("ws://localhost:8081");
ws.onmessage = (e) => {
    let messageType : string = e.toString();

    switch (messageType) {
        case "RoomList":
        case "EnterRoom":
        case "NewMessage":
        default:
            break;
    }
}

function App() {
    const [isInRoom,setInRoom] = useState( window.localStorage.getItem("inRoom") == undefined ? false : true );
    const [roomDataState,setRoomDataState] = useState<roomitem>( window.localStorage.getItem("room") == undefined ? null : JSON.parse(window.localStorage.getItem("room") ?? "") );
    
    const [roomList,setRoomList] = useState<Array<roomitem>>([]);
    const [messageList,setMessageList] = useState<messageitem>(new messageitem("a",["a","coeg","coba"]));
    const [user,setUser] = useState<useritem>();
    
    const getRoom = () => {
        // comm with websocket
        let room : Array<roomitem> = [];
        room.push(new roomitem(1,"aaa","aaaa","aaaaa"));
        room.push(new roomitem(2,"aa","aaaa","aaaaa"));
        room.push(new roomitem(3,"aafsdfa","aaaa","aaaaa"));
        room.push(new roomitem(4,"kjdsaaa","aaaa","aaaaa"));
        
        console.log("room",room);
        setRoomList(room);
    }
    const makeRoom = () => {
        // makeroom
        // enterrrom
    }
    const enterRoom = (room : roomitem) => {
        setInRoom(true);
        setRoomDataState(room);
        window.localStorage.setItem("inRoom","true");
        window.localStorage.setItem("room",JSON.stringify(room));
    }
    const leaveRoom = () => {
        setInRoom(false);
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
                    messageList={messageList}/>
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