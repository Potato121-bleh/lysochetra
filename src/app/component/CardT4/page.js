'use client'

import Link from 'next/link'
import { useState } from 'react';
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { faCode, faChevronRight, faHighlighter } from '@fortawesome/free-solid-svg-icons';
//import {arrowright} from '@fortawesome/fas-solid-fas-chevron-right'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


let count = 0;
export default function CardT4(){
    let [rotate2, Setrotate2] = useState();
    let [freezerotate2, Setfreezerotate2] = useState();
    let [padding2, Setpadding2] = useState();
    let [freezepadding2, Setfreezepadding2] = useState();
    let [displaytext2, Setdisplaytext2] = useState();

    function handleclick2(){
        count = count + 1;
        console.log(count)
        if(count % 2 == 0){
            console.log("sth happen here")
                Setrotate2("rotateZ90back");
                Setpadding2("paddingback")
                Setdisplaytext2("hide")
                count = 0;
                setTimeout(() => {
                    Setfreezerotate2("freezerotate1back")
                    Setfreezepadding2("")
                    
                }, 500);
        }
        else{
            Setfreezerotate2("")
            Setrotate2("rotateZ90");
            Setpadding2("padding")
            setTimeout(() => {
                Setfreezerotate2("freezerotate1")
                Setfreezepadding2("freezepadding")
                Setdisplaytext2("show")
            }, 500);
        }
    }

    return(<>
    <div className={`project-link-con ${padding2} ${freezepadding2}`} > 
        <FontAwesomeIcon onClick={handleclick2} className={`icon-child ${rotate2} ${freezerotate2}`} icon={faChevronRight} />
        <Link href='./project/storage/ACLEDAclone' className="project-li" >Service Website</Link>
        <div className={`dd-text ${displaytext2}`} ><p>The description: <br/> 
        This project is a website that built to provide service that I built to test my animation style that have to add it into my project
        to bring more life into my project. Hope you check it out and check out my website.<br/>
        Tools: HTML, CSS, Javascript, React
        </p></div>
    </div> 
    </>)
}