import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, 
    Route, Link} from "react-router-dom";
import {w3cwebsocket as websocket} from "websocket";

import Chat from './Chat';
import Help from './Help';
import About from './About';

import logo from './logo.svg';


const ws = new websocket("ws://localhost:8081");

function App() {
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
            <Route path="/"><Chat isInRoom={isInRoom} roomDataState={roomDataState} leaveRoom={leaveRoom} enterRoom={enterRoom} /></Route>
        </Switch>
        </Router>
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

// todo make header
// todo loading

export default App