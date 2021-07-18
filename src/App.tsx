import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, 
    Route, Link} from "react-router-dom";
import {w3cwebsocket as websocket} from "websocket";
    
import {roomitem} from './type/roomitem';
import * as msg from './type/messageitem';

import Chat from './Chat';
import Help from './Help';
import About from './About';

import logo from './logo.svg';

import "./css/skeleton.css"
import "./css/normalize.css"


const ws = new websocket("ws://localhost:8081");

function App() {
    const [isInRoom,setInRoom] = useState( window.localStorage.getItem("inRoom") == undefined ? false : true );
    const [roomDataState,setRoomDataState] = useState<roomitem>( window.localStorage.getItem("room") == undefined ? null : JSON.parse(window.localStorage.getItem("room") ?? "") );

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
        <div>Header
            <br/>
            <img style={{height:"50px",width:"50px"}} src={logo} />
            <ul>
                <li><Link to="/">Chat</Link></li>
                <li><Link to="/help">Help</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
        <Switch>
            <Route path="/help"><Help/></Route>
            <Route path="/about"><About/></Route>
            <Route path="/">
                <Chat isInRoom={isInRoom} roomDataState={roomDataState} 
                    leaveRoom={leaveRoom} enterRoom={enterRoom} />
            </Route>
        </Switch>
        </Router>
    </>
}



// ws.onopen = () => {}        // request room
ws.onmessage = (e) => {
    let messageType : string = msg.messageType(e);

    switch (messageType) {
        case "New Room":
        case "Enter Room Request":
        case "Enter Room Success":
        case "Enter Room Failed":
        case "New Message":
        case "Room Empty":
        default:
            break;
    }

}    // process event
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