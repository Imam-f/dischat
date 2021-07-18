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
import "./css/layout.css"


function App() {
    const [isInRoom,setInRoom] = useState( window.localStorage.getItem("inRoom") == undefined ? false : true );
    const [roomDataState,setRoomDataState] = useState<roomitem>( window.localStorage.getItem("room") == undefined ? null : JSON.parse(window.localStorage.getItem("room") ?? "") );
    const [messageList,setMessageList] = useState<Array<msg.messageitem>>([]);

    const ws = new websocket("ws://localhost:8081");
    ws.onmessage = (e) => {
        let messageType : string = msg.messageType(e);
    
        switch (messageType) {
            case "NewRoom":
            case "EnterRoom":
            case "NewMessage":
            default:
                break;
        }
    }

    const getRoom = () => {
        
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
                    leaveRoom={leaveRoom} enterRoom={enterRoom} />
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