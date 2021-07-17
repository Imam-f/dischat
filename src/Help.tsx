import React, { useState } from "react";
import Slide from "./Slide/Slide";

function Help() {
    const [page, setPage] = useState(1);
    const [isExpandPage, setExpandPage] = useState(false);
    const addone = () => {
        setPage((page+1)%3);
    }
    const subone = () => {
        setPage((page+2)%3)
    }
    const expand = () => {
        let notExpand = !isExpandPage;
        setExpandPage(notExpand);
    }
    let slides = Array.from(Array(3).keys());

    return <>
        Help {slides}
        <div>
            <div onClick={subone}>prev</div>
            <div>
                {isExpandPage ? slides.map(
                        (item, index) => {
                            return <><Slide num={item}/><br/></>
                        }
                        ) : <Slide num={page}/>
                }
            </div>
            <div onClick={addone}>next</div>
            <div onClick={expand}>down</div>
        </div>
    </>
}


// slide show format
// enter > mkroom > chat > quit

export default Help;