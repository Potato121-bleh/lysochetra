'use client'

import './../../project/project.css'
import Link from 'next/link'
import { useState } from 'react';
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { faCode, faChevronRight, faHighlighter } from '@fortawesome/free-solid-svg-icons';
//import {arrowright} from '@fortawesome/fas-solid-fas-chevron-right'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


let count = 0;
export default function CardT1(){
    let [rotate1, Setrotate1] = useState();
    let [freezerotate1, Setfreezerotate1] = useState();
    let [padding1, Setpadding1] = useState();
    let [freezepadding1, Setfreezepadding1] = useState();
    let [displaytext1, Setdisplaytext1] = useState();

    function handleclick1(){
        count = count + 1;
        console.log(count)
        if(count % 2 == 0){
            console.log("sth happen here")
                Setrotate1("rotateZ90back");
                Setpadding1("paddingback")
                Setdisplaytext1("hide")
                count = 0;
                setTimeout(() => {
                    Setfreezerotate1("freezerotate1back")
                    Setfreezepadding1("")
                    
                }, 500);
        }
        else{
            Setfreezerotate1("")
            Setrotate1("rotateZ90");
            Setpadding1("padding")
            setTimeout(() => {
                Setfreezerotate1("freezerotate1")
                Setfreezepadding1("freezepadding")
                Setdisplaytext1("show")
            }, 500);
        }
    }

    return(<>
    <div className={`project-link-con ${padding1} ${freezepadding1}`} > 
        <FontAwesomeIcon onClick={handleclick1} className={`icon-child ${rotate1} ${freezerotate1}`} icon={faChevronRight} />
        <Link href='./project/ACLEDAclone' className="project-li" >Clone ACLEDA website</Link>
        <div className={`dd-text ${displaytext1}`} ><p className='dd-text-p' >The description: <br/> This is an Website that
        I build from scratch by copying an actual website from https://www.acledabank.com.kh/kh/eng/. 
        the purpose of this project is to test my knowledge after I finish learning my lesson of React app. <br/>
        Tools: HTML, CSS, Javascript, React <br/>
        Finished: 09/03/2024
 </p></div>
    </div> 
    </>)
}