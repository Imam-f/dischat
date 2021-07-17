import React from 'react';
import {BrowserRouter as Router, Switch, 
    Route, Link} from "react-router-dom";
import {w3cwebsocket as websocket} from "websocket";

import Chat from './Chat';
import Help from './Help';
import About from './About';

import logo from './logo.svg';


const ws = new websocket("ws://localhost:8081");

function App() {
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
            <Route path="/"><Chat/></Route>
        </Switch>
        </Router>
    </>
}

// todo do header

export default App