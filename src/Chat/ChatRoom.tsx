import React, {useState, useRef} from "react";
import logo from "../logo.svg";
import MessageRenderer from "./MessageRenderer";

function ChatRoom(prop:any) {
    // Roomdata
    // leave
    // messageStore
    // prop.messageStore();
    const inputRef : any = useRef();
    const [messageBox, typeMessageBox] = useState("");
    const msgTyped = (e:any) => {
        typeMessageBox(e.target.value);
    }
    const submitMsg = (e : any) => {
        // submit
        prop.sendMessage(messageBox);
        inputRef.current.value = "";
        typeMessageBox("");
        e.preventDefault();
    }

    return <>
        <br/>
        <button onClick={prop.leave}>Exit</button>
        <br/>
        {/*prop.roomData.id} + {prop.roomData.name} + {prop.roomData.creator} + {prop.roomData.code*/}
        <br/>
        <br/>
        <br/>
        

        <form>
        <div className="chatbox">
            <img src={logo} className="a"/>
            <div className="b">{prop.user.name}</div>
            <div className="c">{prop.roomData.name}</div>

            <div className="d">
                <div>
                    <MessageRenderer message={prop.messageList} user={prop.user}/>
                </div>
            </div>
                <div className="f">
                    <input type="search" placeholder="Message" onChange={msgTyped} 
                        onKeyDown={(e : any) => {
                            if(e.keyCode == 13) {
                                return submitMsg; 
                            }  else {
                                return null
                            }
                        }} ref={inputRef ?? null}></input>
                </div>
                <div className="g"><button onClick={submitMsg}>Send</button></div>
        </div>
        </form>
    </>
}

// chat
// bar
    // embedd
    // text
    // send
    // profile


export default ChatRoom;
