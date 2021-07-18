import React, { useState } from "react";
import Slide from "./Slide/Slide";

function Help() {
    const [page, setPage] = useState(0);
    const [isExpandPage, setExpandPage] = useState(false);
    
    let numSlide = 4;
    const addone = () => {
        setPage((page+1) % numSlide);
    }
    const subone = () => {
        setPage((page + numSlide - 1) % numSlide)
    }
    const expand = () => {
        let notExpand = !isExpandPage;
        setExpandPage(notExpand);
    }
    let slides = Array.from(Array(numSlide).keys());

    
    return <>
        <div style={{margin : "0 0 0 10px"}}>Help</div>
        <div>
            <div> { isExpandPage ? slides.map(
                (item, key) => {
                    return <Slide key={key} num={item}/>
                }) : <Slide num={page}/> }
            </div>
            <div className="helpnav">
                { isExpandPage ? <></> : <span onClick={subone}>prev</span> }
                { isExpandPage ? <span onClick={expand}>up</span> : <span onClick={expand}>down</span> }
                { isExpandPage ? <></> : <span onClick={addone}>next</span> }
            </div>
        </div>
    </>
}

// todo change dir to icon

// slide show format
// enter > mkroom > chat > quit

export default Help;