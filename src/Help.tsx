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
        Help
        <div>
            <div> { isExpandPage ? slides.map(
                (item, key) => {
                    return <Slide key={key} num={item}/>
                }) : <Slide num={page}/> }
            </div>
            { isExpandPage ? <></> : <div onClick={subone}>prev</div> }
            { isExpandPage ? <></> : <div onClick={addone}>next</div> }
            { isExpandPage ? <div onClick={expand}>up</div> : <div onClick={expand}>down</div> }
        </div>
    </>
}

// todo change dir to icon

// slide show format
// enter > mkroom > chat > quit

export default Help;