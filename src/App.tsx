import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, 
    Route, Link} from "react-router-dom";
import {w3cwebsocket as websocket} from "websocket";

import Chat from './Chat';
import Help from './Help';
import About from './About';

import logo from './logo.svg';


// const ws = new websocket("ws://localhost:8081");

function App() {
    const [count, setCount] = useState(0)

    return <>
        <Router>
        <div>Header
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

export default App